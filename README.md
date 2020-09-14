[![buddy pipeline](https://app.buddy.works/gngr/buurthuiskeijenburg/pipelines/pipeline/239412/badge.svg?token=d3d72e8827c58169036184d335bee7d2428430b826818c01148feec9d41db0f6 "buddy manual pipeline")](https://app.buddy.works/gngr/buurthuiskeijenburg/pipelines/pipeline/239412) [![buddy pipeline](https://app.buddy.works/gngr/buurthuiskeijenburg/pipelines/pipeline/240017/badge.svg?token=d3d72e8827c58169036184d335bee7d2428430b826818c01148feec9d41db0f6 "buddy automatic pipeline")](https://app.buddy.works/gngr/buurthuiskeijenburg/pipelines/pipeline/240017)

# Buurthuis Keijenburg

Deployment is triggered after push and every night on the `master` branch using [Buddy](https://app.buddy.works).

# Activiteiten
## Toevoegen van een activiteit

- Maak een nieuw bestand aan in de map `/source/activiteiten/agenda`
- De naam van dit bestand moet de datum van de activiteit zijn `yyyy-mm-dd.md`
- Kopieer onderstaande tekst en plak dit in het bestand:
```
---
eleventyNavigation:
    parent: Agenda
    key: >
        Titel van de activiteit
time: 19:00 - 21:00
---
```
- Vervolgens kan je daar onder het bericht maken

## Toevoegen van een vaste activiteit
- Voeg de activiteit toe in `/source/activiteiten/activiteiten.json`

# Fotoalbums
## Toevoegen van een fotoalbum

- Het toevoegen van een nieuw album gebeurd in de map `/source/fotoalbums/gallery`
- [Resize de foto's naar een breedte van maximaal 800px](https://bulkresizephotos.com/en?resize_type=width&resize_value=800)
- Voeg hier een nieuwe map toe en plaats de fotos
- Indien nodig, bij een nieuw jaar, voeg een nieuw jaartal toe aan `galleryYears` in `/source/fotoalbums/fotoalbums.md`


# Verenigingen
## Toevoegen van een vereniging

- Maak een nieuw bestand aan in de map `/source/verenigingen`
- Kopieer onderstaande tekst en plak dit in het bestand:
```
---
eleventyNavigation:
    parent: Verenigingen
    key: naam van de vereniging
---
```
- Vervolgens kan je daar onder het verhaal van de vereniging plaatsen

# Keijenburg
## Toevoegen artikel op "Keijenburg in het nieuws"


* In het geval van een foto [upload je deze hier](https://github.com/sjorsjes/buurthuiskeijenburg/tree/master/source/_statics/img/content)
* Rechtsbovenin staat _"Add file" > "Upload files"_

* [Ga naar de pagina](https://github.com/sjorsjes/buurthuiskeijenburg/blob/master/source/keijenburg/in-het-nieuws.md)
* Klik op het potlood om de pagina te wijzigen
* Hier kun je de teksten toevoegen die je wilt
* Om een plaatje toe te voegen doe je het volgende:  
`!["ALT TEKST"]({{ "/" | url }}lib/img/content/BESTANDSNAAM.jpg)`  
Vervang in de bovenste regel `BESTANDSNAAM.jpg` voor de naam van het plaatje dat je hebt geupload in stap 1.  
Vervang `"ALT TEKST"` voor een hele korte uitleg wat er te zien is op het plaatje bv. `"Krantenknipsel BN de Stem"`.

# Het Team
## Toevoegen van een medewerker

- Verwijder de achtergrond van het portret m.b.v [deze website](https://www.remove.bg/) en download het plaatje zonder achtergrond
- Ga naar [Photopea](https://www.photopea.com/), dit is een soort online photoshop
- Klik op `File > New` in het menu. Links bovenin voor `width: 320 px` en `height: 200 px`. DPI laat je op `72.000` staan en klik op `create`.
- Klik op `Layer > New > Layer` in het menu.
- Klik op de `Background` layer die rechts in het Layer panel staat en verwijder deze met je delete of backspace knop.
- Open het portret dat je in stap 1 hebt gemaakt door bovenin `File > Open & Place` te kiezen.
- Resize / Verplaats de foto zodat deze een beetje mooi staat uitgelijnd. Zorg ervoor dat er aan de bovenkant van het hoofd wat ruimte over is. Zo'n 10% van de totale hoogte.
- Wanneer je klaar bent ga je bovenin het menu naar `File > Export as > PNG`. Sla het plaatje ergens op.
- Ga naar https://github.com/sjorsjes/buurthuiskeijenburg/tree/master/source/_statics/img/team , kies de correcte folder en klik rechtsboven in op `Add file > Upload files` en upload het portret.
- Bewerk https://github.com/sjorsjes/buurthuiskeijenburg/blob/master/source/het-team/het-team.json en voeg de medewerker toe. Let op: er staat 3 categorieën in dit bestand; `vrijwilligers`, `personeelsleden` en `bestuursleden`.

## Verwijderen van een medewerker
- Bewerk https://github.com/sjorsjes/buurthuiskeijenburg/blob/master/source/het-team/het-team.json en verwijder de medewerker. Let op: verwijder het hele stuk zoals hieronder
```
{
  "name": "Naam",
  "image": "team/[category]/naam.png"
},
```
- https://github.com/sjorsjes/buurthuiskeijenburg/tree/master/source/_statics/img/team , kies de correcte folder en medewerker en klik dan op de prullenbak rechts in beeld en vervolgens op `commit changes`.