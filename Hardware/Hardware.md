# Gware et Hardware, composition des sols et connection.

*Le Gware sera le nom de notre sonde théorique.*

## Sommaire
1. Introduction
   * 1.1. Composants nécessaires
   * 1.2. Différent type de terre
   * 1.3 Problématique principale
2. Température
   * 2.1 Terres chaudes et froides
   * 2.2 Thermomètre
3. l'Humidité
   * 3.1 L'eau constituant principale des plantes
   * 3.2 Hygromètre
4. Autres composants
   * 4.1 Matière organiques
   * 4.2 Matière chimiques
5. Alternative
   * 5.1 API
6. Conclusion
   * 6.1 Hardware ou pas ?

## 1. Introduction

### **1.1 Composants nécessaires**

Pour le bon déroulement de la vie d'une plante peu importe laquelle, des composants sont nécessaires tels que :

- PH H20
- PH Kcl (Chlorure de Potassium)
- CEC
- CO2
- O2
- Lumière
- Matière organiques
- Calcaire total et actif
- N (Azote)
- P (Phosphore)
- K (Potassium)
- Mg (Magnésium)
- Ca (Calcium)
- Rapport C / N (Carbone / Azote)

### **1.2 Différents type de terre**

Tous ces composants sont obligatoires, mais à une certaine quantité,
La terre est composée de quatre éléments principaux : argile, sable, calcaire (carbonate de chaux) et humus. Selon qu'il est particulièrement riche en l'un de ces éléments, le sol est dit respectivement argileux, sableux, calcaire ou humifère,

### **1.3 Problématique principale**

comment récolté les données de la composition de la terre à l'aide de capteur et de centraliser ces données sur une application ?
La question qui pourrait être pertinente aussi, est-ce possible ?

## 2. Température

### **2.1 Terres chaudes et froides**

On trouve en effet deux types de terre : 

Les « terres chaudes » :
C’est par exemple les drainants et sableux qui se réchauffent rapidement au printemps.

Les « terres froides » :
Ce sont les terres argileuses lourdes qui se réchauffent lentement à la période des semis au printemps.

Inversement, elles seront plus longues à se refroidir et vous pourrez faire plus longtemps des plantations de fleurs vivaces en automne en bonnes conditions.

### **2.2 Thermomètre**

Il sera donc impératif d'avoir un thermomètre sur notre "Gware".
Il faut compter environ 60 €.

## 3. L'humidité

### **3.1 L'eau constituant principale des plantes**

La matière végétale est surtout constituée d’eau
    - Tomate : 92-97% d’eau
    - Feuilles : 80-90% d’eau
    - Bois : 30-70%
    - Graines : 12-15% (parfois beaucoup moins)

*Attention*, cela ne signifie pas que les cellules sont toujours turgescentes au maximum :
**teneur relative en eau** = *((masse observée – masse à sec) / (masse max – masse à sec))*

En général, dans les feuilles, **TRE** = 0.9 environ

### **3.2 Hygromètre**

Tout comme le thermomètre c'est indispensable, il faut compter environ 60 € aussi.


## 4. Autres composant

### **4.1 Matière organiques**

nous devons conserver les échantillons dans des contenants en plastique ou dans des boîtes de carton ciré
exempts de contamination.

Pour identifier une bactérie, vous devez effectuer des tests de coloration, analyser son apparition et observer comment elle réagit bien à des conditions différentes. Si vous avez besoin d'un résultat rapide, prélevez un échantillon d'ADN à envoyer à un laboratoire.
nous ne pourrons pas amener un laboratoire dans une sonde.

### **4.2 Matière chimique**

Même chose pour les composants chimiques tel que le P, K, Ca, qui nécessite des tests en laboratoire.

## 5. Alternative

### **5.1 API**

Nous pouvons utiliser des alternatives pour informer le client sur le taux d'humidité par exemple dans la zone où il est,
bien évidemment même raisonement pour le thermomètre, une connexion avec météo-france depuis l'application sera suffisante pour ce genre de données.

## 6. Conclusion

### **6.1 hardware ou pas ?**

Le problème ici avec l'hardware c'est que les données les plus importantes qu'on aurait pus récolté avec Gware c'était les composés organiques et chimiques du sol et en plus la température et l'humidité.

Si la sonde devait avoir un rôle ici c'est d'amener le laboratoire dans le jardin, ce qui n'est pas de nos objectifs ni de nos compétences ni de nos moyens.

La conclusion est que les données "simples" comme la température et l'humidité seront récolté et centralisé sur l'application avec des échanges d'information avec des API's, la partie hardware de ce projet n'est au vu de ce rapport plus du tout pertinent et est retiré du projet, pour l'instant, il ce peut que dans le futur nos intéret vis à vis d'une sonde puisse changer.