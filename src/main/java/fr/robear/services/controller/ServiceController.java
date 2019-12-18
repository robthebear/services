package fr.robear.services.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import fr.robear.services.model.ServiceCarrosserie;
import fr.robear.services.model.ServiceHebergement;
import fr.robear.services.model.ServiceMecanique;

@RestController
@RequestMapping("/services")
@CrossOrigin("*")
public class ServiceController {
	private static final AtomicInteger count = new AtomicInteger(0);
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
				new ServiceMecanique(count.incrementAndGet(), "Denis", "Cantaron",
						"J'ai un atelier bien rempli avec une bonne connaissance en mécanique et de la pratique"),
				new ServiceMecanique(count.incrementAndGet(), "Jean-Luc", "Monaco",
						"Je suis corporate et priorise l'humain est important, mais pas trop quand même"),
				new ServiceMecanique(count.incrementAndGet(), "Gwenolé", "Brest",
						"La bière c'est tout ma vie, et la vie c'est la bière")));

		servicehebergementList = new ArrayList<ServiceHebergement>(Arrays.asList(
				new ServiceHebergement(count.incrementAndGet(), "Jeannette", "Montauroux",
						"Ouverte d'esprit, je partage mon lit avec qui veut bien", 1),
				new ServiceHebergement(count.incrementAndGet(),"Gérard", "Dijon",
						"Après l'amour est dans le pré, je me suis mis à la moto, j'ai une grande grange pour accueillir mes ami(e)s motard(e)s", 12),
				new ServiceHebergement(count.incrementAndGet(), "Louis", "Bordeaux",
						"Je fais de la moto depuis 40 ans et j'aime recevoir mes amis motards, et comme on dit: \"Vieux motard que jamais\". J'adore l'humour!", 3)));

	}

	@RequestMapping("/carrosserie/recherche")
	public List<ServiceCarrosserie> getCarrosserieList() {
		return serviceCarrosseriesList;
	}

	@RequestMapping("/carrosserie/add")
	public List<ServiceCarrosserie> addServiceCarrosserie(
			@RequestParam(value = "user") String user,
			@RequestParam(value = "localisation") String localisation,
			@RequestParam(value = "comment") String comment) {
		serviceCarrosseriesList.add(new ServiceCarrosserie(count.incrementAndGet(), user,
				localisation, comment));
		return serviceCarrosseriesList;
	}

	@RequestMapping("/mecanique/recherche")
	public List<ServiceMecanique> getMecaniqueList() {
		return servicemecaniqueList;
	}

	@RequestMapping("/mecanique/add")
	public List<ServiceMecanique> addServiceMecanique(
			@RequestParam(value = "user") String user,
			@RequestParam(value = "localisation") String localisation,
			@RequestParam(value = "comment") String comment) {
		servicemecaniqueList.add(new ServiceMecanique(count.incrementAndGet(), user,
				localisation, comment));
		return servicemecaniqueList;
	}

	@RequestMapping("/hebergement/recherche")
	public List<ServiceHebergement> getHebergementList() {
		return servicehebergementList;
	}

	@RequestMapping("/hebergement/add")
	public List<ServiceHebergement> addServiceHebergement(
			@RequestParam(value = "user") String user,
			@RequestParam(value = "localisation") String localisation,
			@RequestParam(value = "comment") String comment, 
		@RequestParam(value = "nbCouchage") int nbCouchage) {
		servicehebergementList.add(new ServiceHebergement(count.incrementAndGet(), 
				user, localisation, comment, nbCouchage));
		return servicehebergementList;
	}

	@RequestMapping("/rechercheId/{id}")
	public ResponseEntity<Object> getArticle(@PathVariable int id) {
		for (ServiceCarrosserie serviceCarrosserie : serviceCarrosseriesList) {
			if (serviceCarrosserie.getId() == id) {
				return ResponseEntity.ok(serviceCarrosserie);
			}
		}
		for (ServiceMecanique serviceMecanique : servicemecaniqueList) {
			if (serviceMecanique.getId() == id) {
				return ResponseEntity.ok(serviceMecanique);
			}
		}
		for (ServiceHebergement servicehebergement : servicehebergementList) {
			if (servicehebergement.getId() == id) {
				return ResponseEntity.ok(servicehebergement);
			}
		}
		return ResponseEntity.notFound().build();
	}
}
