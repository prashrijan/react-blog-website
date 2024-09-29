import conf from '../conf/conf.js'
import {Client, Account, ID} from 'appwrite'

export class AuthSerivce{
    client = new Client()
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.apwriteProjectId);
        this.account = new Account(this.client)    
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            
            // check if user is created
            if(userAccount){
                // call another method
            }else{
                return userAccount 
            }
        } catch (error) {
             throw error
        }
    }
}

const authService = new AuthSerivce()

export default authService