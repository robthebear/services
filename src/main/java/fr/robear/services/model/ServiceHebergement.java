package fr.robear.services.model;

public class ServiceHebergement {
	private int idHebergement;
	private String localisationHebergement;
	private String userHebergement;
	private int nbCouchageHebergement;
	private String commentHebergement;

	public ServiceHebergement(int idHebergement, String localisationHebergement, String userHebergement,
			int nbCouchageHebergement, String commentHebergement) {
		super();
		this.idHebergement = idHebergement;
		this.localisationHebergement = localisationHebergement;
		this.userHebergement = userHebergement;
		this.nbCouchageHebergement = nbCouchageHebergement;
		this.commentHebergement = commentHebergement;
	}

	public int getIdHebergement() {
		return idHebergement;
	}

	public String getLocalisationHebergement() {
		return localisationHebergement;
	}

	public String getUserHebergement() {
		return userHebergement;
	}

	public int getNbCouchageHebergement() {
		return nbCouchageHebergement;
	}

	public String getCommentHebergement() {
		return commentHebergement;
	}

}
