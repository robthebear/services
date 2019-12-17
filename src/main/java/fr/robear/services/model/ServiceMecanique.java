package fr.robear.services.model;

public class ServiceMecanique {
	private int id;
	private String userServiceMecanique;
	private String localistaionServiceMecanique;
	private String commentServiceMecanique;

	public ServiceMecanique(int id, String userServiceMecanique, String localistaionServiceMecanique,
			String commentServiceMecanique) {
		super();
		this.id = id;
		this.userServiceMecanique = userServiceMecanique;
		this.localistaionServiceMecanique = localistaionServiceMecanique;
		this.commentServiceMecanique = commentServiceMecanique;
	}

	public int getId() {
		return id;
	}

	public String getUserServiceMecanique() {
		return userServiceMecanique;
	}

	public String getLocalistaionServiceMecanique() {
		return localistaionServiceMecanique;
	}

	public String getCommentServiceMecanique() {
		return commentServiceMecanique;
	}

}
