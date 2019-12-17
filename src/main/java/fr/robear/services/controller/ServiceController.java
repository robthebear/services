package fr.robear.services.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.robear.services.model.ServiceCarrosserie;
import fr.robear.services.model.ServiceHebergement;
import fr.robear.services.model.ServiceMecanique;

@RestController
@RequestMapping("/services")
@CrossOrigin("*")
public class ServiceController {
	private static final AtomicInteger count = new AtomicInteger(0);
	private static final AtomicInteger count1 = new AtomicInteger(0);
	private static final AtomicInteger count2 = new AtomicInteger(0);
	List<ServiceCarrosserie> serviceCarrosseriesList;
	List<ServiceHebergement> servicehebergementList;
	List<ServiceMecanique> servicemecaniqueList;

	public ServiceController() {
		serviceCarrosseriesList = new ArrayList<ServiceCarrosserie>(Arrays.asList(
				new ServiceCarrosserie(count.incrementAndGet(), "Jean", "Marseille",
						"Je pratique la peinture et la petite carrosserie, j'ai un atelier bien équipé"),
				new ServiceCarrosserie(count.incrementAndGet(), "Bernard", "Poitiers",
						"Je débute en carroserie mais j'ai quelques outils, ouvert à l'aide communautaire"),
				new ServiceCarrosserie(count.incrementAndGet(), "Olivier", "Paris",
						"C'est compliqué, mais je peux très bien faire de la carrosserie ou me faire embaucher par la NASA")));

		servicemecaniqueList = new ArrayList<ServiceMecanique>(Arrays.asList(
				new ServiceMecanique(count1.incrementAndGet(), "Denis", "Cantaron",
						"J'ai un atelier bien rempli avec une bonne connaissance en mécanique et de la pratique"),
				new ServiceMecanique(count1.incrementAndGet(), "Jean-Luc", "Monaco",
						"Je suis corporate et priorise l'humain est important, mais pas trop quand même"),
				new ServiceMecanique(count1.incrementAndGet(), "Gwenolé", "Brest",
						"La bière c'est tout ma vie, et la vie c'est la bière")));

		servicehebergementList = new ArrayList<ServiceHebergement>(Arrays.asList(
				new ServiceHebergement(count2.incrementAndGet(), "Montauroux", "Jeannette", 1,
						"Ouverte d'esprit, je partage mon lit avec qui veut bien"),
				new ServiceHebergement(count2.incrementAndGet(), "Dijon", "Gérard", 12,
						"Après l'amour est dans le pré, je me suis mis à la moto, j'ai une grande grange pour accueillir mes ami(e)s motard(e)s"),
				new ServiceHebergement(count2.incrementAndGet(), "Bordeaux", "Louis", 3,
						"Je fais de la moto depuis 40 ans et j'aime recevoir mes amis motards, et comme on dit: \"Vieux motard que jamais\". J'adore l'humour!")));

	}

	@RequestMapping("/carrosserie/recherche")
	public List<ServiceCarrosserie> getCarrosserieList() {
		return serviceCarrosseriesList;
	}

	@RequestMapping("/carrosserie/add")
	public List<ServiceCarrosserie> addServiceCarrosserie(
			@RequestParam(value = "userCarrosserie") String userCarrosserie,
			@RequestParam(value = "localisationCarrosserie") String localisationCarrosserie,
			@RequestParam(value = "commentCarrosserie") String commentCarrosserie) {
		serviceCarrosseriesList.add(new ServiceCarrosserie(count.incrementAndGet(), userCarrosserie,
				localisationCarrosserie, commentCarrosserie));
		return serviceCarrosseriesList;
	}

	@RequestMapping("/mecanique/recherche")
	public List<ServiceMecanique> getMecaniqueList() {
		return servicemecaniqueList;
	}

	@RequestMapping("/mecanique/add")
	public List<ServiceMecanique> addServiceMecanique(
			@RequestParam(value = "userServiceMecanique") String userServiceMecanique,
			@RequestParam(value = "localistaionServiceMecanique") String localistaionServiceMecanique,
			@RequestParam(value = "commentServiceMecanique") String commentServiceMecanique) {
		servicemecaniqueList.add(new ServiceMecanique(count1.incrementAndGet(), userServiceMecanique,
				localistaionServiceMecanique, commentServiceMecanique));
		return servicemecaniqueList;
	}

	@RequestMapping("/hebergement/recherche")
	public List<ServiceHebergement> getHebergementList() {
		return servicehebergementList;
	}

	@RequestMapping("/hebergement/add")
	public List<ServiceHebergement> addServiceHebergement(
			@RequestParam(value = "localisationHebergement") String localisationHebergement,
			@RequestParam(value = "userHebergement") String userHebergement,
			@RequestParam(value = "nbCouchageHebergement") int nbCouchageHebergement,
			@RequestParam(value = "commentHebergement") String commentHebergement) {
		servicehebergementList.add(new ServiceHebergement(count2.incrementAndGet(), localisationHebergement,
				userHebergement, nbCouchageHebergement, commentHebergement));
		return servicehebergementList;
	}

}
