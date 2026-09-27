---
title: Privacy Policy
permalink: /privacy-policy/
---

**Last updated:** September 27, 2026

**Publisher:** Nayana Adassuriya

**Privacy contact:** [nayana4u@gmail.com](mailto:nayana4u@gmail.com)

## Summary

- TABONO has no servers. Your workspace is stored in your browser and in your own Google account; the publisher never receives a copy.
- TABONO does not sell, share or rent your information, shows no ads, and has no analytics or tracking.
- Your browsing history, top sites and open tabs are read on your device only and are never sent anywhere.

## Scope

This policy applies to the TABONO Chrome extension, including its New Tab page, toolbar popup, and side panel. TABONO is a personal productivity workspace for projects, tasks, schedules, bookmarks, and notes.

## Information TABONO handles

### Workspace information

TABONO handles information you create or import, including project and task names and descriptions, statuses, priorities, dates and times, comments, task attachments and note links, bookmark titles and URLs, notebook and note content, and your preferences. Rich notes may include embedded images or other content you add.

Workspace records are stored in your browser using IndexedDB and Chrome extension storage. Earlier versions of TABONO also kept a copy of notebooks and note pages in Chrome's `storage.sync` area; current versions no longer do this and remove that copy when they start.

When a task is deleted, TABONO keeps a small deletion marker (the task ID, the linked calendar event ID and the deletion time, but no title or content) so that the deletion also reaches your other devices. Markers can be purged in **Settings > Data & Maintenance**.

### Browser information

The Home feature uses Chrome's Top Sites and History APIs to display frequently visited sites. It queries up to 200 history entries from the preceding 30 days, combines them with Chrome's top-sites results, and displays up to 20 unique sites. This happens on your device only; the results are not saved by TABONO and are never sent anywhere.

When the Home or Bookmarks view is open, TABONO may read your open browser tabs to show their titles and URLs and let you switch to a tab. Open-tab details are not added to your saved workspace unless you choose to save a tab, a window, or a session as a favorite or bookmark collection. Chrome's internal pages are excluded.

TABONO does not edit or delete your Chrome browsing history.

### Google account and authentication

Google sign-in is required to use TABONO. When you sign in, TABONO receives your name, email address, and profile photo from Google, and uses an OAuth access token to call Google APIs on your behalf. The sign-in details and token are stored in Chrome extension storage on your device and are used only from your browser; they are never sent to the publisher.

TABONO uses the following Google permissions:

- **Your name, email address and profile photo**, shown in TABONO's account dialog.
- **Google Calendar**: to list your calendars, show the calendars and events you select, and create and manage events for your TABONO tasks in a "Tabono Tasks" calendar. Google describes this permission as allowing an app to see, edit, share, and permanently delete calendars you can access. TABONO only changes events for its own tasks; events from your other calendars are shown read-only.
- **Google Drive app data**: to keep your workspace backup in a private, hidden folder in your Google Drive that only TABONO can access.
- **Google Drive files created by TABONO**: to upload files you choose to attach to a task. TABONO cannot see your other Drive files.

### Google Drive and Calendar data

TABONO backs up your workspace (projects, tasks, bookmark collections, notebooks, note pages, and preferences) to the private app data folder in your Google Drive. Sync runs after edits, periodically while TABONO is open, and when you request it. When you use TABONO on several devices, their changes are merged record by record through this backup. The time of the last successful sync is stored on your device and shown in the account dialog.

If you attach a file to a task, TABONO uploads that file to your Google Drive. Scheduling a task sends its details (title, description, date, time and priority) to Google Calendar. Google processes this information under its own terms and privacy policy.

Signing out stops future requests to Google until you sign in again. It does not remove data already stored in Google Drive or Google Calendar; you can delete those copies in Google services.

## External services

TABONO communicates directly with Google APIs (`www.googleapis.com` and `oauth2.googleapis.com`) for sign-in, profile details, Calendar, and Drive. It also makes these requests:

- **Website icons:** to show a site's icon, TABONO requests it from Google's favicon service, or from DuckDuckGo's icon service as a fallback. The request contains only the website's domain name (for example, `github.com`).
- **Profile photo:** your Google profile photo is loaded from Google's image servers. If you have no photo, your initials are drawn locally.

Fonts and all application code are bundled inside the extension; TABONO does not load remote code, fonts or scripts. These providers receive the network information needed to fulfill each request, such as your IP address. This privacy policy page is hosted on GitHub Pages, which may process visitor IP addresses and request logs under GitHub's privacy policy.

The publisher does not operate a backend for TABONO, does not receive your workspace records, and does not sell or use your information for advertising.

## How to manage or delete information

- Edit or delete projects, tasks, bookmarks, notebooks, and notes in TABONO.
- Use **Settings > Data & Maintenance** to export a JSON workspace backup, purge old deletion markers, or reset the local workspace. Resetting local data does not delete copies already stored in Google services.
- To remove copies in Google services, delete TABONO's hidden backup in Google Drive (**Settings > Manage apps > TABONO > Delete hidden app data**), delete uploaded attachments from Google Drive, and delete events from Google Calendar.
- Sign out, or remove TABONO's access at [myaccount.google.com/permissions](https://myaccount.google.com/permissions), to stop future Google API access. Removing access does not itself delete existing Drive or Calendar data.
- Manage or revoke Chrome permissions at `chrome://extensions`. Features that need a revoked permission will no longer work.
- Uninstalling TABONO removes its local data from your browser.

## Security

All requests to Google use HTTPS and Google OAuth. The extension runs under a strict Content Security Policy that allows only its own bundled code and connections to Google APIs, and note and bookmark content is sanitized before it is displayed. Workspace content is stored in your browser profile and in your Google account; TABONO does not add a separate encryption layer to local data, so protect access to your Chrome profile and device.

## Google API Limited Use

TABONO's use and transfer of information received from Google APIs will comply with the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including its Limited Use requirements. Google user data is used only to provide the sign-in, Calendar, Drive backup, and attachment features described above. It is not transferred to others, not used for advertising, and not read by humans, except with your consent, for security purposes, or as required by law.

## Children

TABONO is not directed to children under 13 and does not knowingly collect information from them.

## Changes and contact

This policy may be updated when TABONO's data practices change. The latest version and its effective date will be published on this page. For privacy questions or requests, contact [nayana4u@gmail.com](mailto:nayana4u@gmail.com).
