import {Account, Avatars, Databases, ID, Client, Query} from 'appwrite';
import { useAuth } from '../src/store';



export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: '6629362549dce7726aa3',
    platform: 'com.libertylockbox.milos',
    databaseId: '663a5010002b1c184dc9',
    userCollectionId: '663a50210024aacb9fa3',
    itemCollectionId: '663a503a000b1ce8e73d'
}

const {endpoint, platform, projectId, databaseId, userCollectionId, itemCollectionId, storageId} = config;

// Init your Web SDK
const client = new Client();

client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId) // Your project ID
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username) // try to create new acc

        if (!newAccount) throw Error; // if can't create

        const avatarUrl = avatars.getInitials(username) // if created new account, create an avatar

        await signIn(email, password)

        const newUser = await databases.createDocument(
            databaseId,
            userCollectionId, 
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

        return newUser;

    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);

        useAuth.setState({
            sessionId: session.$id,
        });
        checkForUser()
        
        return session
    } catch (error) {
        throw new Error(error)
    }
}

export const signOut = async () => {
    try {
        const signOut = await account.deleteSessions()

        // Clear sessionId and username using useAuth
        useAuth.setState({
            sessionId: null,
            username: null,
        });

        return signOut
    } catch (error) {
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if (!currentUser) throw Error;
        return currentUser.documents[0]
    } catch (error) {
        console.error(error);
    }
}

export const checkForUser = async () => {
    const user = await getCurrentUser();
    const accountGet = await account.get()
        // Set username using useAuth
        useAuth.setState({
            username: user.username,
            avatar: user.avatar,
            email: user.email,
            label: accountGet.labels[0]
        });
        return accountGet
}


export const getAllItems = async () => {
    try {
        const currentItems = await databases.listDocuments(
            databaseId,
            itemCollectionId,
            [Query.select([])]
        )

        if (!currentItems) throw Error;

        return currentItems;
    } catch (error) {
        console.log(error)
    }
}


export const createNewItem = async (name, image, price, chamber, quantity) => {
    const newItem = await databases.createDocument(
        databaseId,
        itemCollectionId, 
        ID.unique(),
        {
            name,
            image,
            price,
            chamber,
            quantity,
        }
    )

    return newItem;
}