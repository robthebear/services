package fr.robear.services.model;

public class ServiceCarrosserie {
private int id;
private String user;
private String localisation;
private String comment;


public ServiceCarrosserie(int id, String user, String localisation, String comment) {
	this.id = id;
	this.user = user;
	this.localisation = localisation;
	this.comment = comment;
}


public int getId() {
	return id;
}


public String getUser() {
	return user;
}


public String getLocalisation() {
	return localisation;
}


public String getComment() {
	return comment;
}



}
