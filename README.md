[![buddy pipeline](https://app.buddy.works/gngr/buurthuiskeijenburg/pipelines/pipeline/239412/badge.svg?token=88e6b35c51b4c8ac96083698125b4321aab8eb9303524493acff80059aabb5ca "buddy pipeline")](https://app.buddy.works/gngr/buurthuiskeijenburg/pipelines/pipeline/239412)

# Buurthuis Keijenburg

Deployment is triggered after push and every night on the `master` branch using [Buddy](https://app.buddy.works).

# Activiteiten
## Toevoegen van een activiteit

- Maak een nieuw bestand aan in de map `/source/posts`
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

# Fotoalbums
## Toevoegen van een fotoalbum

- Het toevoegen van een nieuw album gebeurd in de map `/source/_statics/img/gallery`
- [Resize de foto's naar een breedte van max 800px](https://bulkresizephotos.com/en?resize_type=width&resize_value=800)
- Voeg hier een nieuwe map toe en plaats de fotos
- Indien nodig, bij een nieuw jaar, voeg een nieuw jaartal toe aan `galleryYears` in `/source/fotoalbums/fotoalbums.md`