//console.log("block_container.js connected successful");
import * as libi from '/libi/lib.js';

export var block_container_cards=`
  <div class="cards-container">

  <!-- CARD 1 -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation Cypress</div>
    <div class="description">
      Maîtriser les bases du test automatique avec Cypress. Comprendre les commandes essentielles, gérer les sélecteurs, les assertions, etc.
    </div>
    <div class="card-footer">
      <div>🔢 260591</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>

  <!-- CARD 2 (long title & long desc) -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation « Management Agile Scrum et Préparation PSM1 »</div>
    <div class="description">
      Cette formation vous prépare au rôle de Scrum Master en vous enseignant comment initier, planifier et mener un projet agile dans un environnement d'entreprise moderne. Vous apprendrez également à vous préparer à l'examen PSM1...
    </div>
    <div class="card-footer">
      <div>🔢 169970</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>

  <!-- CARD 3 (short description) -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation ISO 20022</div>
    <div class="description">
      Apprenez les bases de la norme ISO 20022 et sa mise en œuvre.
    </div>
    <div class="card-footer">
      <div>🔢 119236</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>
  
  <!-- CARD 4 (short description) -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation ISO 20022</div>
    <div class="description">
      Apprenez les bases de la norme ISO 20022 et sa mise en œuvre.
    </div>
    <div class="card-footer">
      <div>🔢 119236</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>
  
<!-- CARD 5 (short description) -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation ISO 20022</div>
    <div class="description">
      Apprenez les bases de la norme ISO 20022 et sa mise en œuvre.
    </div>
    <div class="card-footer">
      <div>🔢 119236</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>
  
  <!-- CARD 1 -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation Cypress</div>
    <div class="description">
      Maîtriser les bases du test automatique avec Cypress. Comprendre les commandes essentielles, gérer les sélecteurs, les assertions, etc.
    </div>
    <div class="card-footer">
      <div>🔢 260591</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>

  <!-- CARD 2 (long title & long desc) -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation « Management Agile Scrum et Préparation PSM1 »</div>
    <div class="description">
      Cette formation vous prépare au rôle de Scrum Master en vous enseignant comment initier, planifier et mener un projet agile dans un environnement d'entreprise moderne. Vous apprendrez également à vous préparer à l'examen PSM1...
    </div>
    <div class="card-footer">
      <div>🔢 169970</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>

  <!-- CARD 3 (short description) -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation ISO 20022</div>
    <div class="description">
      Apprenez les bases de la norme ISO 20022 et sa mise en œuvre.
    </div>
    <div class="card-footer">
      <div>🔢 119236</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>
  
  <!-- CARD 4 (short description) -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation ISO 20022</div>
    <div class="description">
      Apprenez les bases de la norme ISO 20022 et sa mise en œuvre.
    </div>
    <div class="card-footer">
      <div>🔢 119236</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>
  
<!-- CARD 5 (short description) -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation ISO 20022</div>
    <div class="description">
      Apprenez les bases de la norme ISO 20022 et sa mise en œuvre.
    </div>
    <div class="card-footer">
      <div>🔢 119236</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>

<!-- CARD 4 (short description) -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation ISO 20022</div>
    <div class="description">
      Apprenez les bases de la norme ISO 20022 et sa mise en œuvre.
    </div>
    <div class="card-footer">
      <div>🔢 119236</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>
  
<!-- CARD 5 (short description) -->
  <div class="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ841_N3utGnXl1qspqE3OmKbfrRqlynylw&s" class="logo" alt="logo" />
    <div class="title">Formation ISO 20022</div>
    <div class="description">
      Apprenez les bases de la norme ISO 20022 et sa mise en œuvre.
    </div>
    <div class="card-footer">
      <div>🔢 119236</div>
      <div>✅ Ouvert</div>
    </div>
    <button class="btn">En savoir plus</button>
  </div>
</div>
`;

//link to "main_main"
libi.get_set_all_class_plus("main_main",block_container_cards);

//stylesheet link
var css_link=`
  <link rel="stylesheet" href="/CSS/secondary_page/secondary_page.css" type="text/css" media="all" />
`;

libi.get_set_tag_index_plus("head",0,css_link);