import { Injectable, OnModuleInit } from "@nestjs/common";
import { Collection, Db, MongoClient } from "mongodb";
@Injectable()

export class mongoService implements OnModuleInit{
    private mongoClient:MongoClient
    private DB: Db
    private MONGODB_NAME = 'newUsers'
    private MONGO_USER_COLLECTION_NAME = 'USERS'
    private MONGO_SALES_COLLECTION_NAME = "SALES"
    private MONGO_ORDERS_COLLECTION_NAME = "ORDERS"
    private MONGO_FILES_COLLECTION_NAME = "FILES"
    private MONGO_USERS_COLLECTION_NAME = "USER_REG"
    constructor() {
        this.mongoClient = new MongoClient('mongodb+srv://ramu:QHOpGf3U6zmo9vmw@cluster0.b39h3vm.mongodb.net/'); 
      }
    
      async onModuleInit() {
        await this.connect();
      }
    
      async connect() {
        try {
          await this.mongoClient.connect();
          this.DB = this.mongoClient.db(this.MONGODB_NAME); 
          console.log('Connected to MongoDB');
        } catch (error) {
          console.error('Error connecting to MongoDB:', error);
        }
      }
      getFilesCollection(){
        return this.DB.collection(this.MONGO_FILES_COLLECTION_NAME)
      }
    getNewUserCollection(){
        return this.DB.collection(this.MONGO_USER_COLLECTION_NAME)
    }

    getSalesCollection(){
      return this.DB.collection(this.MONGO_SALES_COLLECTION_NAME)
    }
    getOrdersColleection(){
      return this.DB.collection(this.MONGO_ORDERS_COLLECTION_NAME)
    }
    getUserReg(){
      return this.DB.collection(this.MONGO_USERS_COLLECTION_NAME)
    }


}