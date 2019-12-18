package fr.robear.services.model;

public class ServiceMecanique {
	private int id;
	private String user;
	private String localisation;
	private String comment;

	public ServiceMecanique(int id, String user, String localisation,
			String comment) {
		super();
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
