# MusicFlow — Music Streaming Service

A music streaming service clone where the user can search for tracks and artists, listen to music, build playlists, and maintain a favorites library.

The platform runs on top of **Jamendo API v3.0** — a catalog of 500,000+ tracks under free licenses. The API provides search, filtering, artist and album information, and direct links to audio streams.

> **API:** [Jamendo API v3.0](https://developer.jamendo.com/v3.0/docs).
> REST: `https://api.jamendo.com/v3.0/…`
> Authorization: `client_id` (GET parameter) for reading, OAuth2 for write methods.
> Free tier: up to 35,000 requests per month.

---

## API Setup

1. Register at [devportal.jamendo.com](https://devportal.jamendo.com/) and create an application.
2. Obtain a `client_id` — added as a query parameter to all requests.
3. Response format: `format=json` (or `format=jsonpretty` for debugging).
4. For write methods (favorites) — configure the OAuth2 redirect URL in the application panel.

> **Important:** The free tier is limited to 35,000 requests per month. Use caching and avoid unnecessary requests during development.

---

## Backend

The project uses its own backend for storing user content: playlists and uploaded tracks.

> **Required:** The backend must be written in **NestJS** (TypeScript). Using other frameworks (Express, Fastify without NestJS, etc.) is not allowed.

| Endpoint         | Method | Description                                        |
| ---------------- | ------ | -------------------------------------------------- |
| `/auth/register` | POST   | Registration: email + password                     |
| `/auth/login`    | POST   | Login: email + password → JWT                      |
| `/playlists`     | GET    | Get user playlists                                 |
| `/playlists`     | POST   | Create a playlist                                  |
| `/playlists/:id` | PUT    | Update a playlist (name, description, track order) |
| `/playlists/:id` | DELETE | Delete a playlist                                  |
| `/tracks/upload` | POST   | Upload an audio file (multipart/form-data)         |
| `/tracks`        | GET    | Get tracks uploaded by the user                    |
| `/tracks/:id`    | DELETE | Delete an uploaded track                           |

---

## Discover Page Implementation (main page)

### 1. Popular Tracks

- Display a "Popular Tracks" section — a list of 10–15 tracks sorted by popularity. Data loaded from Jamendo API (`GET /v3.0/tracks?order=popularity_total`).
- Each track is displayed as a card: album cover, title, artist name, duration (in `mm:ss` format).
- Play count is displayed in abbreviated form (e.g., `1,234,567` → `1.2M`).
- A Play button on each card — clicking it starts playback in the player.
- If a track is already playing — visual indication (e.g., equalizer bars animation or card highlight).

### 2. New Releases

- A "New Releases" section — a list of 10 tracks sorted by date (`GET /v3.0/tracks?order=releasedate_desc`).
- Card format is the same as Popular Tracks.

### 3. Genre Tags

- A block with genre tags (rock, electronic, jazz, pop, etc.).
- Clicking a tag navigates to the Search page with a filter for that tag.

---

## Search Page Implementation

### 1. Search Input

- A search bar at the top of the page (or in the header).
- Results update as the user types without pressing Enter (live search).
- Search is performed via Jamendo API (`GET /v3.0/tracks?search={query}`).

### 2. Search Results

- Results are displayed as a list of track cards: cover, title, artist, duration, play count.
- A Play button on each result.
- Clicking the artist name navigates to the Artist page.
- Clicking the album name navigates to the Album page.

### 3. Filtering and Sorting

- Filters: by tag/genre (multi-select), duration range (min–max seconds).
- Sorting: by popularity, by date, by name.
- Filters and sorting are combined in a panel; changes are applied instantly.

### 4. Pagination / Load More

- For a large number of results — pagination or a "Load more" button.

---

## Artist Page Implementation

### 1. Artist Information

- Display artist data from Jamendo API (`GET /v3.0/artists?id={id}`): name, photo, short biography (if available), number of albums.

### 2. Artist Tracks

- List of the artist's popular tracks (`GET /v3.0/artists/tracks?id={id}`).
- Format: cover, title, duration, play count.
- A Play button on each track.
- A "Play all" button — adds all tracks to the playback queue.

### 3. Artist Albums

- List of the artist's albums (`GET /v3.0/artists/albums?id={id}`).
- Each album: cover, title, release date, track count.
- Clicking an album navigates to the Album page.

---

## Album Page Implementation

### 1. Album Information

- Album cover, title, artist name (click navigates to Artist), release date, total duration.
- Data loaded from Jamendo API (`GET /v3.0/albums/tracks?id={id}`).

### 2. Track List

- Numbered list of album tracks: number, title, duration (mm:ss).
- A Play button on each track.
- A "Play album" button — adds all tracks to the queue.

---

## Library Page Implementation

### 1. Playlists

- List of user playlists: name, track count, total duration.
- A "Create playlist" button — opens the creation form.
- Clicking a playlist opens the track list with options to play, remove tracks, and reorder.

### 2. Playlist Management

- Playlist creation/editing form: name (required), description (optional).
- Adding tracks via inline search: input field → results → "add" button.
- A playlist must contain at least 1 track (validation).
- Playlist deletion with confirmation.

### 3. Recently Played (listening history)

- Automatic saving of every played track with date and time.
- A "Recently Played" list with date filtering.
- Clicking a track starts playback.

### 4. Access Control

- Library is accessible only to authenticated users. Unauthenticated users are redirected to Discover.

---

## Player Implementation (global player)

### 1. Player UI

- The player is fixed at the bottom of the page, visible on all pages.
- Displays: current track cover, title, artist name.
- Controls: Play/Pause, Previous, Next.
- Progress bar — a visual playback progress bar. The user can click/drag to seek.
- Display of current time and total duration in `mm:ss` format.
- Volume control.

### 2. Queue (playback queue)

- The user can open the playback queue list.
- Tracks are added to the queue when pressing Play or "Play all".
- Previous/Next switch between tracks in the queue.

### 3. Audio Playback

- Track playback via direct audio stream links from Jamendo API (`audio` field in the response).
- The player continues playback when navigating between pages.

---

## About Us Page Implementation

### 1. Team Introduction

- Information about each team member: name, role in the project, short bio, photo, GitHub link.
- Card design is consistent.

### 2. RS School Logo

- RS School logo with a clickable link to [rs.school](https://rs.school/).

---

## Header & Navigation

### 1. Header Layout

- App logo/name linking to Discover.
- Navigation: Discover, Search, Library, About Us.
- Search bar (typing navigates to Search with results).
- Authorization status icon.

### 2. Routing

- All pages are accessible via direct URLs and through header navigation.
- Browser back/forward buttons are supported.
- Navigating to a non-existent URL shows a 404 (Not Found) page with an option to return to Discover.
- Library is accessible only to authenticated users — attempting to access without authorization redirects to Discover.
- Pages are loaded lazily (lazy loading).

---

## Beyond API — Features Not Available in Jamendo

Jamendo API provides read-only catalog access. User content and personal collections are stored on the custom NestJS backend.

### 1. Uploading Custom Tracks

- Upload form: title, artist, genre, audio file.
- The file is sent to the backend (`POST /tracks/upload`, multipart/form-data) and stored on the server.
- Uploaded tracks appear in the Library alongside Jamendo tracks.
- Playback via the URL returned by the backend.
- The user can delete their track (`DELETE /tracks/:id`).

### 2. User Playlists

- Full CRUD via the backend: creation, editing name/description, adding/removing tracks, reordering (drag & drop).
- Data is accessible from any device after logging in.

---

## Useful Links

- [Jamendo API v3.0 Documentation](https://developer.jamendo.com/v3.0/docs) — main documentation
- [Tracks endpoint](https://developer.jamendo.com/v3.0/tracks) — track search and filtering
- [Artists endpoint](https://developer.jamendo.com/v3.0/artists) — artist information
- [Albums endpoint](https://developer.jamendo.com/v3.0/albums) — album information
- [Write methods](https://developer.jamendo.com/v3.0/write-methods) — favorites, likes (OAuth2)
- [Jamendo Developer Portal](https://devportal.jamendo.com/) — application registration
- [HTML5 Audio API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) — playback management
- [NestJS Documentation](https://docs.nestjs.com/) — official backend framework documentation
- [NestJS File Upload](https://docs.nestjs.com/techniques/file-upload) — file upload via Multer
