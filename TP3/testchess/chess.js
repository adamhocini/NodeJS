var _pj;

var mot_choisi;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }

  container["in_es6"] = in_es6;
  return container;
}

_pj = {};

_pj_snippets(_pj);

function recuperer_pendu(etape) {
  var pendu;

  pendu = function () {
    var _pj_a = [],
        _pj_b = range(6);

    for (var _pj_c = 0, _pj_d = _pj_b.length; _pj_c < _pj_d; _pj_c += 1) {
      var x = _pj_b[_pj_c];

      _pj_a.push(null);
    }

    return _pj_a;
  }.call(this);

  pendu[0] = "1 \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\n2 \u2551\n3 \u2551\n4 \u2551\n5 \u2551\n6 \u2551      \u2588\u2588\u2588";
  pendu[1] = "1 \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\n2 \u2551       |\n3 \u2551\n4 \u2551\n5 \u2551\n6 \u2551      \u2588\u2588\u2588";
  pendu[2] = "1 \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\n2 \u2551       |\n3 \u2551       O\n4 \u2551\n5 \u2551\n6 \u2551      \u2588\u2588\u2588";
  pendu[3] = "1 \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\n2 \u2551       |\n3 \u2551       O\n4 \u2551      -|-\n5 \u2551\n6 \u2551      \u2588\u2588\u2588";
  pendu[4] = "1 \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\n2 \u2551       |\n3 \u2551       O\n4 \u2551      -|-\n5 \u2551      / \\ \n6 \u2551      \u2588\u2588\u2588";
  pendu[5] = "1 \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\n2 \u2551       |\n3 \u2551       O\n4 \u2551      -|-\n5 \u2551      / \\ \n6 \u2551           perdu !";
  return pendu[etape];
}

function afficher_pendu(etape) {
  console.log(recuperer_pendu(etape));
}

function affichage_final(reussite, vrai_mot) {
  if (reussite) {
    console.log("Bravo !");
  } else {
    console.log(`Et non, perdu. Le mot était ${vrai_mot}`);
  }
}

function afficher_mot(mot) {
  for (var index = 0, _pj_a = mot.length; index < _pj_a; index += 1) {
    console.log(mot[index]);
  }
}

function recuperer_reponse() {
  return input("A quelle lettre pensez-vous ? ");
}

function verifier(tableau1, tableau2) {
  /* Fonction booléenne : True si les deux contenus des tableaux sont identiques */
  for (var index = 0, _pj_a = tableau1.length; index < _pj_a; index += 1) {
    if (!(tableau1[index] === tableau2[index])) {
      return false;
    }
  }

  return true;
}

function modifier_mot(mot, vrai_mot, caractere) {
  /* Fonction booléenne : True si caractére est dans vrai_mot. Modifie mot par effet de bord */
  var existe;
  existe = false;

  for (var index = 0, _pj_a = vrai_mot.length; index < _pj_a; index += 1) {
    if (vrai_mot[index] === caractere) {
      mot[index] = vrai_mot[index];

      if (!existe) {
        existe = true;
      }
    }
  }

  return existe;
}

function dissimuler(reponse) {
  /* Renvoie une 'copie' ne contenant que des étoiles */
  return function () {
    var _pj_a = [],
        _pj_b = reponse;

    for (var _pj_c = 0, _pj_d = _pj_b.length; _pj_c < _pj_d; _pj_c += 1) {
      var carac = _pj_b[_pj_c];

      _pj_a.push("*");
    }

    return _pj_a;
  }.call(this);
}

function transformer(mot) {
  /*Renvoie le tableau regroupant les caractères du mot reçu
   :: param mot(str)   :: un string VALIDE dans le cadre du jeu
  :: return (list)    :: un tableau des caractères du mot
   :: exemple ..
  >>> transformer('bonjour')
  ['b', 'o', 'n', 'j', 'o', 'u', 'r']
   */
  return list(mot);
}

function valider(mot) {
  var acceptables;
  acceptables = "abcdefghijklmnopqrstuvwxyz";

  for (var index = 0, _pj_a = mot.length; index < _pj_a; index += 1) {
    if (!_pj.in_es6(mot[index], acceptables)) {
      return false;
    }
  }

  return true;
}

function jouer(mot_mystere) {
  var etape, exact, lettre_voulue, mot, vrai_mot;
  vrai_mot = transformer(mot_mystere);
  mot = dissimuler(vrai_mot);
  etape = 0;
  afficher_pendu(etape);

  while (etape < 5 && !verifier(mot, vrai_mot)) {
    afficher_mot(mot);
    lettre_voulue = recuperer_reponse();
    exact = modifier_mot(mot, vrai_mot, lettre_voulue);

    if (!exact) {
      etape = etape + 1;
      afficher_pendu(etape);
    }
  }

  affichage_final(etape < 5, vrai_mot);
}

mot_choisi = "informatique";
jouer(mot_choisi);
