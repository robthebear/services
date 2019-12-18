package fr.robear.services.model;

public class ServiceMecanique {
	private int id;
	private String user;
	private String localistaion;
	private String comment;

	public ServiceMecanique(int id, String user, String localistaion,
			String comment) {
		super();
		this.id = id;
		this.user = user;
		this.localistaion = localistaion;
		this.comment = comment;
	}

	public int getId() {
		return id;
	}

	public String getUser() {
		return user;
	}

	public String getLocalistaion() {
		return localistaion;
	}

	public String getComment() {
		return comment;
	}

}
