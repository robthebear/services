# services

<h1>Introduction:</h1>

<h2>Petite présentation du projet.</h2>

<p>D'un commun accord avec le groupe nous avons fait le choix de faire notre projet autour de notre fil rouge.<br>
D'une pour nous avancer, mais aussi pour nous préparer pour la suite du projet<br>
Ma partie consistait à m'occuper de la partie services, qui sont hebergement, mécanique et carrosserie.<br>
Les gens s'inscrivent et proposent leur savoir faire ou un hébergement.<br>
La page à 3 onglets avec chacun 2 sous-onglets. On peut soit rechercher, ou aussi ajouter une fiche.<br>
Il est possible de rechercher par id en haut à droite.</p>

<h2>EndPoints</h2>
<ul>
<li><code>/carrosserie/recherche</code>--Recherche dans la liste carrosserie</li>
<li><code>/mecanique/add</code>--Ajoute dans la liste mécanique</li>
<li><code>/rechercheId/{id}</code>--Recherche dans les 3 listes par Id</li>
</ul>
<p>Exemple de requète</p>
<pre><code>http://localhost:8080/services/hebergement/recherche</code><pre>