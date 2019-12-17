package fr.robear.services.model;

public class ServiceCarrosserie {
private int idCarrosserie;
private String userCarrosserie;
private String localisationCarrosserie;
private String commentCarrosserie;


public ServiceCarrosserie(int idCarrosserie, String userCarrosserie, String localisationCarrosserie, String commentCarrosserie) {
	this.idCarrosserie = idCarrosserie;
	this.userCarrosserie = userCarrosserie;
	this.localisationCarrosserie = localisationCarrosserie;
	this.commentCarrosserie = commentCarrosserie;
}


public int getIdCarrosserie() {
	return idCarrosserie;
}


public String getUserCarrosserie() {
	return userCarrosserie;
}


public String getLocalisationCarrosserie() {
	return localisationCarrosserie;
}


public String getCommentCarrosserie() {
	return commentCarrosserie;
}



}
