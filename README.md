# Buurthuis Keijenburg

Deployment is triggered after push and every night on the `main` branch using Github Actions.

-   [ ] homepage updaten
-   [x] dingen op Keijenburg > in het nieuws kunnen plaatsen
-   [ ] fotos toevoegen aan fotoalbum
-   [ ] aanpassen van de foto in de headers
-   [ ] verenigingen kunnen aanvullen
-   [x] agenda kunnen aanvullen
-   [ ] wijzigen activiteit
-   [x] teamleden toevoegen en verwijderen
-   [ ] TOC voor de readme maken

# Activiteiten

## Toevoegen van een activiteit

-   Maak een nieuw bestand in https://github.com/sjorsjes/buurthuiskeijenburg/tree/main/src/pages/activiteiten/agenda
-   Selecteer het goede jaar
-   De naam van dit bestand moet de datum van de activiteit zijn `yyyy-mm-dd.md`
-   Kopieer onderstaande tekst en plak dit in het bestand:

```
---
layout: "../../../../layouts/content.astro"
title: Keijenburg Bingo
time: "13.30"
date: "2023-01-13"
---
```

-   Vervolgens kan je daar onder het bericht maken

## Toevoegen van een vaste activiteit

-   Voeg de activiteit toe in https://github.com/sjorsjes/buurthuiskeijenburg/tree/main/src/_content/vaste-activiteiten.json

# Fotoalbums

## Toevoegen van een fotoalbum

-   Het toevoegen van een nieuw album gebeurd in de map https://github.com/sjorsjes/buurthuiskeijenburg/tree/main/src/pages/fotoalbums
-   Selecteer het goede jaar
-   Voeg hier een nieuwe map toe en plaats de fotos
-   In deze nieuwe map dient ook een `index.md` file te staan met onderstaande content

```
---
layout: "../../../../layouts/photoalbum.astro"
title: "Naam van het album"
---
```

# Verenigingen

## Toevoegen van een vereniging

-   Maak een nieuw bestand aan in de map https://github.com/sjorsjes/buurthuiskeijenburg/tree/main/src/pages/verenigingen
-   Kopieer onderstaande tekst en plak dit in het bestand:

```
---
layout: "../../layouts/content.astro"
title: Naam van de vereniging
---
```

-   Vervolgens kan je daar onder het verhaal van de vereniging plaatsen

## Verwijderen van een vereniging

-   Ga naar https://github.com/sjorsjes/buurthuiskeijenburg/tree/main/src/pages/verenigingen en verwijder de vereninging

# Keijenburg

## Toevoegen artikel op "Keijenburg in het nieuws"

-   In het geval van een foto [upload je deze hier](https://github.com/sjorsjes/buurthuiskeijenburg/tree/main/public/images)
-   Rechtsbovenin staat _"Add file" > "Upload files"_

-   [Ga naar de pagina](https://github.com/sjorsjes/buurthuiskeijenburg/tree/main/src/pages/keijenburg/in-het-nieuws.md)
-   Klik op het potlood om de pagina te wijzigen
-   Hier kun je de teksten toevoegen die je wilt
-   Om een plaatje toe te voegen doe je het volgende:  
    `!["ALT TEKST"](/images/content/BESTANDSNAAM.jpg "ALT TITLE")`  
    Vervang in de bovenste regel `BESTANDSNAAM.jpg` voor de naam van het plaatje dat je hebt geupload in stap 1.  
    **LET OP DAT ER GEEN SPATIES IN HET BESTANDSNAAM STAAN.**  
    Vervang `"ALT TEKST"` en `"ALT TITLE"` voor een hele korte uitleg wat er te zien is op het plaatje bv. `"Krantenknipsel BN de Stem"`.

# Het Team

## Toevoegen van een medewerker

-   Verwijder de achtergrond van het portret m.b.v [deze website](https://www.remove.bg/) en download het plaatje zonder achtergrond
-   Ga naar [Photopea](https://www.photopea.com/), dit is een soort online photoshop
-   Klik op `File > New` in het menu. Links bovenin voor `width: 320 px` en `height: 200 px`. DPI laat je op `72.000` staan en klik op `create`.
-   Klik op `Layer > New > Layer` in het menu.
-   Klik op de `Background` layer die rechts in het Layer panel staat en verwijder deze met je delete of backspace knop.
-   Open het portret dat je in stap 1 hebt gemaakt door bovenin `File > Open & Place` te kiezen.
-   Resize / Verplaats de foto zodat deze een beetje mooi staat uitgelijnd. Zorg ervoor dat er aan de bovenkant van het hoofd wat ruimte over is. Zo'n 10% van de totale hoogte.
-   Wanneer je klaar bent ga je bovenin het menu naar `File > Export as > PNG`. Sla het plaatje ergens op.
-   Ga naar https://github.com/sjorsjes/buurthuiskeijenburg/tree/main/public/images/team , kies de correcte folder en klik rechtsboven in op `Add file > Upload files` en upload het portret.
-   Bewerk https://github.com/sjorsjes/buurthuiskeijenburg/tree/main/src/_content/teams.json en voeg de medewerker toe. Let op: er staat 3 categorieën in dit bestand; `vrijwilligers`, `personeelsleden` en `bestuursleden`.

## Verwijderen van een medewerker

-   Bewerk https://github.com/sjorsjes/buurthuiskeijenburg/tree/main/src/_content/teams.json en verwijder de medewerker. Let op: verwijder het hele stuk zoals hieronder

```
{
  "name": "Naam",
  "image": "team/[category]/naam.png"
},
```

-   https://github.com/sjorsjes/buurthuiskeijenburg/tree/main/public/images/team , kies de correcte folder en medewerker en klik dan op de prullenbak rechts in beeld en vervolgens op `commit changes`.
