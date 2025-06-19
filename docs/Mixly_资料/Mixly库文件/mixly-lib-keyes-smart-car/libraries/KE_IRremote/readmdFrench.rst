IRremote Library
----------------

Cette bibliothèque vous permet d'envoyer et de recevoir des signaux
infrarouges sur un Arduino. Des tutoriels et plus d'informations seront
disponibles sur la page d'accueil officielle.

.. _version---223:

Version - 2.2.3
---------------

Installation
------------

1. Allez à la
   `Releases <https://github.com/z3t0/Arduino-IRremote/releases>`__
   page.
2. Téléchargez la dernière version.
3. Extraire le fichier zip
4. Déplacez le dossier "IRremote" vers vos bibliothèques.
5. Assurez-vous de supprimer Arduino_Root / libraries / RobotIRremote.
   Où Arduino_Root fait référence au répertoire d'installation
   d'Arduino. La bibliothèque RobotIRremote a des définitions similaires
   à IRremote et provoque des erreurs.

FAQ
---

Je ne travaille pas correctement en utilisant Neopixels (aka WS2811 /
WS2812 / WS2812B) Que vous utilisiez la librairie Adafruit Neopixel ou
FastLED, les interruptions sont désactivées sur de nombreux processeurs
bas de gamme comme les arduinos de base. À son tour, cela empêche le
gestionnaire IR de s'exécuter quand il le faut. Il y a quelques
solutions à ce processus, voir cette page de Marc MERLIN `cette page de
Marc
MERLIN <http://marc.merlins.org/perso/arduino/post_2017-04-03_Arduino-328P-Uno-Teensy3_1-ESP8266-ESP32-IR-and-Neopixels.html>`__

Conseils pris en charge
-----------------------

- Teensy 1.0 / 1.0++ / 2.0 / 2++ / 3.0 / 3.1 / Teensy-LC; Crédits:
  @PaulStoffregen (Teensy Team)
- Sanguino
- ATmega8, 48, 88, 168, 328
- ATmega8535, 16, 32, 164, 324, 644, 1284,
- ATmega64, 128
- ATtiny 84 / 85
- ESP32 (recevoir seulement)
- ESP8266 est basé sur un ancien code qui n'est pas très récent, mais
  cela fonctionne raisonnablement bien. Voir
  https://github.com/markszabo/IRremoteESP8266 Sparkfun Pro Micro

Nous sommes ouverts aux suggestions d'ajout de support pour les nouveaux
tableaux, cependant, nous vous recommandons fortement de contacter votre
fournisseur et de fournir un soutien de leur côté.

Spécifications matérielles
--------------------------

+--------------------------+---------------------+-------------------+
| Carte/CPU                | Envoyer Pin         | Compteurs         |
+==========================+=====================+===================+
| `ATtiny8                 | **6**               | **1**             |
| 4 <https://github.com/Sp |                     |                   |
| enceKonde/ATTinyCore>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `ATtiny8                 | **1**               | **TINY0**         |
| 5 <https://github.com/Sp |                     |                   |
| enceKonde/ATTinyCore>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `                        | **9**               | **1**             |
| ATmega8 <https://github. |                     |                   |
| com/MCUdude/MiniCore>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| Atmega32u4               | 5, 9, **13**        | 1, 3, **4**       |
+--------------------------+---------------------+-------------------+
| `ATmega48, ATmega88,     | **3**, 9            | 1, **2**          |
| ATmega168,               |                     |                   |
| AT                       |                     |                   |
| mega328 <https://github. |                     |                   |
| com/MCUdude/MiniCore>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `ATmeg                   | 13, 14, 6           | 1, **2**, 3       |
| a1284 <https://github.co |                     |                   |
| m/MCUdude/MightyCore>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `ATmega164, ATmega324,   | 13, **14**          | 1, **2**          |
| ATme                     |                     |                   |
| ga644 <https://github.co |                     |                   |
| m/MCUdude/MightyCore>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `ATmega8535 ATmega16,    | **13**              | **1**             |
| ATm                      |                     |                   |
| ega32 <https://github.co |                     |                   |
| m/MCUdude/MightyCore>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `ATmega64,               | **13**              | **1**             |
| AT                       |                     |                   |
| mega128 <https://github. |                     |                   |
| com/MCUdude/MegaCore>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| ATmega1280, ATmega2560   | 5, 6, **9**, 11, 46 | 1, **2**, 3, 4, 5 |
+--------------------------+---------------------+-------------------+
| `ESP3                    | N/A (insupporté)    | **1**             |
| 2 <http://esp32.net/>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `Sparkfun Pro            | 9, **5**, 5         | 1, **3**, 4_HS    |
| Mi                       |                     |                   |
| cro <https://www.sparkfu |                     |                   |
| n.com/products/12640>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `Teensy                  | **17**              | **1**             |
| 1.0 <https://            |                     |                   |
| www.pjrc.com/teensy/>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `Teensy                  | 9, **10**, 14       | 1, 3, **4_HS**    |
| 2.0 <https://            |                     |                   |
| www.pjrc.com/teensy/>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `Teensy++ 1.0 /          | **1**, 16, 25       | 1, **2**, 3       |
| 2.0 <https://            |                     |                   |
| www.pjrc.com/teensy/>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `Teensy 3.0 /            | **5**               | **CMT**           |
| 3.1 <https://            |                     |                   |
| www.pjrc.com/teensy/>`__ |                     |                   |
+--------------------------+---------------------+-------------------+
| `Teensy-LC <https://     | **16**              | **TPM1**          |
| www.pjrc.com/teensy/>`__ |                     |                   |
+--------------------------+---------------------+-------------------+

Patchs expérimentaux
--------------------

Voici les correctifs strictement pris en charge qui n'ont pas encore été
intégrés. Si vous avez des questions, n'hésitez pas à demander ici. Si
cela fonctionne, faites le nous savoir!

`Arduino
101 <https://github.com/z3t0/Arduino-IRremote/pull/481#issuecomment-311243146>`__

Le tableau ci-dessus répertorie les temporisations actuellement
supportées et les broches d'envoi correspondantes, beaucoup de ces
broches supplémentaires sont ouvertes.

Utilisation
-----------

- À faire TODO (Vérifier les exemples pour l'instant)

Contribution
------------

Si vous voulez contribuer à ce projet:

- Signaler les bogues et les erreurs
- Demander des améliorations
- Créer des problèmes et tirer des requêtes
- Parlez de cette bibliothèque à d'autres personnes
- Contribuer de nouveaux protocoles Vérifiez ici
  `ici <Contributing.md>`__ pour quelques guidelines

Contact
-------

Email: zetoslab@gmail.com Please only email me if it is more appropriate
than creating an Issue / PR. I **will** not respond to requests for
adding support for particular boards, unless of course you are the
creator of the board and would like to cooperate on the project. I will
also **ignore** any emails asking me to tell you how to implement your
ideas. However, if you have a private inquiry that you would only apply
to you and you would prefer it to be via email, by all means.

Contributeurs
-------------

Check `here <Contributors.md>`__ @Lsuperman735 French translation

Copyright
---------

Copyright 2009-2012 Ken Shirriff
