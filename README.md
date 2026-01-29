# Event Talks App

Eine einfache einseitige Website zur Anzeige des Zeitplans für eine eintägige Veranstaltung mit theologischen Vorträgen.

## Funktionen

- Zeigt einen vollständigen Tagesplan mit Zeitangaben für 6 Vorträge, Pausen und einer Mittagspause.
- Jeder Vortrag enthält Details wie Titel, Sprecher, Kategorie und Beschreibung.
- Echtzeit-Suchfunktion zum Filtern von Vorträgen nach Kategorie.
- Gebaut mit einem einfachen Node.js-Backend und standardmäßigem HTML, CSS und JavaScript im Frontend.

## Technologie-Stack

- **Backend:** Node.js (mit dem integrierten `http`-Modul)
- **Frontend:** HTML, CSS, JavaScript (keine Frameworks)
- **Daten:** JSON

## Projektstruktur

```
/
├── .gitignore        # Git-Ignorierdatei
├── package.json      # Projektkonfiguration und Abhängigkeiten
├── server.js         # Der Node.js-Server
├── talks.json        # Die Vortragsdaten
└── public/
    ├── index.html    # Die Haupt-HTML-Datei
    ├── style.css     # CSS für das Styling
    └── script.js     # JavaScript für die Frontend-Logik
```

## Einrichtung und Verwendung

Folgen Sie diesen Schritten, um das Projekt lokal auszuführen:

1.  **Repository klonen (optional, wenn Sie die Dateien bereits haben):**
    ```bash
    git clone https://github.com/bernschneider/event-talks-app.git
    cd event-talks-app
    ```

2.  **Abhängigkeiten installieren:**
    Öffnen Sie Ihr Terminal im Projektverzeichnis und führen Sie den folgenden Befehl aus:
    ```bash
    npm install
    ```

3.  **Server starten:**
    Führen Sie den folgenden Befehl aus, um den Node.js-Server zu starten:
    ```bash
    npm start
    ```
    Sie sollten die Meldung `Server running on port 3000` in Ihrem Terminal sehen.

4.  **Website aufrufen:**
    Öffnen Sie Ihren Webbrowser und navigieren Sie zu `http://localhost:3000`.

## Vortragsdaten bearbeiten

Die Informationen zu den Vorträgen werden in der Datei `talks.json` gespeichert. Sie können diese Datei direkt bearbeiten, um die Details der Vorträge zu ändern, hinzuzufügen oder zu entfernen.

Jedes Vortragsobjekt hat die folgende Struktur:

```json
{
  "title": "Titel des Vortrags",
  "speakers": ["Name des Sprechers"],
  "category": ["Keyword1", "Keyword2"],
  "duration": 60,
  "description": "Eine kurze Beschreibung des Vortrags."
}
```
