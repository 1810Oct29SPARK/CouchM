package com.revature.projekt.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.revature.projekt.model.Ork;
import com.revature.projekt.repository.OrkRepository;

@Service("orkService")
public class OrkService {

	@Autowired
	OrkRepository or;

	@Autowired
	MongoTemplate mongoTemplate;

	Query query = new Query();

	public Ork getOrkById(String id) {
		return mongoTemplate.findById(id, Ork.class);
	}

	public Ork createOrk(Ork ork) {
		return or.save(ork);
	}

	public Collection<Ork> getAllOrks() {
		return or.findAll();
	}

	public Ork updateOrk(Ork ork) {
		return or.save(ork);
	}

	public void deleteOrk(String id) {
		or.delete(this.getOrkById(id));
	}

	public Ork findByName(String name) {
		Criteria userName = Criteria.where("name").is(name);
		query.addCriteria(userName);
		return mongoTemplate.findOne(query, Ork.class);
	}
}
