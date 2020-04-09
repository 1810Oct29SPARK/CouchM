package com.revature.projekt.util;

import org.bson.Document;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class MongoConfig {

	public void createConn() {

		try {
			MongoClient mongoClient = MongoClients
					.create("mongodb+srv://cax:mouch@projekt-uw29c.mongodb.net/test?retryWrites=true&w=majority");
			MongoDatabase database = mongoClient.getDatabase("projekt");
			database.createCollection("locations");
			MongoCollection<Document> mongoCollection = database.getCollection("users");
			System.out.println(mongoCollection);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}