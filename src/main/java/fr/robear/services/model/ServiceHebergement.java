package fr.robear.services.model;

public class ServiceHebergement {
	private int id;
	private String user;
	private String localisation;
	private String comment;
	private int nbCouchage;

	public ServiceHebergement(int id, String user, String localisation, String comment, int nbCouchage) {
		super();
		this.id = id;
		this.user = user;
		this.localisation = localisation;
		this.comment = comment;
		this.nbCouchage = nbCouchage;
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

	public int getNbCouchage() {
		return nbCouchage;
	}

}
