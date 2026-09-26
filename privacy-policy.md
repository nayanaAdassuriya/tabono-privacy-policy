---
title: Privacy Policy
permalink: /privacy-policy/
---

# TABONO Privacy Policy

**Last updated:** September 26, 2026

**Publisher:** [Replace with your legal name or publishing entity]

**Privacy contact:** [Replace with a monitored contact email]

> **Before publishing:** Replace both bracketed publisher details. Review this policy against the final release build, Google OAuth configuration, and the data-use declarations in the Chrome Web Store dashboard. This page is a description of the current extension implementation, not a substitute for legal advice.

## Scope

This policy applies to the TABONO Chrome extension, including its New Tab page, popup, and side panel. TABONO is a personal productivity workspace for projects, tasks, schedules, bookmarks, and notes.

## Information TABONO handles

### Workspace information

TABONO handles information you create or import, including project and task names and descriptions, statuses, priorities, dates and times, comments, task attachments and note links, bookmark titles and URLs, notebook and note content, and your preferences. Rich notes may include embedded images or other content you add.

Workspace records are stored in the browser using IndexedDB and Chrome extension storage. TABONO also mirrors notebook and note-page records to Chrome's `storage.sync` area when that API is available. Chrome Sync behavior is governed by your Chrome account and sync settings.

### Browser information

The Home feature uses Chrome's Top Sites and History APIs to display frequently visited sites. It queries up to 200 history entries from the preceding 30 days, combines them with Chrome's top-sites results, and displays up to 20 unique sites. TABONO uses this information for that on-device feature; it does not use it for advertising. The raw history results are not intentionally saved as a separate history database by TABONO.

When the Home or Bookmarks view is open, TABONO may query open browser tabs to display their titles and URLs and let you switch to a tab. Open-tab details are not added to your saved workspace unless you choose to save a tab, a window, or a session as a favorite or bookmark collection. Chrome's internal pages are excluded.

Chrome retains the browser history and top-sites records. TABONO does not edit or delete your Chrome browsing history.

### Google account and authentication

If you choose Google sign-in, TABONO receives profile information such as your name, email address, and profile image, and uses an OAuth access token to call Google APIs. The authentication configuration, including the token used by the extension, is stored in Chrome extension storage and used from your browser; it is not sent to a TABONO-operated application server.

The current Calendar OAuth scope is broad: Google describes it as permitting TABONO to see, edit, share, and permanently delete calendars available to your Google account. TABONO uses Calendar access to list calendars, display selected calendars and events, and create or manage TABONO task events. The current TABONO interface presents events from other calendars as read-only, but the authorization scope itself is broader than that interface behavior.

### Google Drive and Calendar data

When Google sync is enabled, TABONO sends a workspace backup to Google Drive's app data area. The backup can contain projects, tasks, bookmark collections, notebooks, note pages, and workspace preferences. Sync may run after edits, periodically while the extension is open, or when you request a sync.

If you choose to attach a file to a task and upload it, TABONO sends that file to your Google Drive account. Task scheduling and calendar features send the relevant task/event details to Google Calendar. Google processes this information under its own terms and privacy policy.

Signing out stops future authenticated requests until you sign in again; it does not necessarily remove data already stored in Google Drive or Google Calendar. You can delete those copies in Google services.

## External services and disclosures

TABONO communicates directly with Google APIs for sign-in, profile details, Calendar, and Drive. It may also request:

- Website favicons from Google's favicon service. The requested domain is included in the favicon URL.
- A fallback avatar image from `ui-avatars.com`. When used, the profile display name is included in the request URL.
- Fonts and font stylesheets from Google Fonts (`fonts.googleapis.com` and `fonts.gstatic.com`).
- Static site delivery from GitHub Pages if this policy is hosted there. GitHub may process visitor IP addresses and request logs under its own privacy policies.

These providers receive the network information needed to fulfill each request. TABONO's current extension code does not send workspace records to a separate TABONO-operated backend. The publisher does not sell workspace information or use it for targeted advertising.

## How to manage or delete information

- Edit or delete projects, tasks, bookmarks, notebooks, and notes in TABONO.
- Use **Settings > Data & Maintenance** to export a JSON workspace backup or reset the local workspace. Resetting local data does not guarantee deletion of copies already stored in Google services.
- Delete Drive backups and uploaded attachments from Google Drive, and delete calendar events from Google Calendar, if you want to remove those remote copies.
- Sign out or revoke TABONO's access in your Google Account to stop future Google API access. Revocation does not itself delete existing Drive or Calendar data.
- Manage or revoke Chrome permissions at `chrome://extensions`. Features that need a revoked permission will no longer work.
- Chrome browsing history remains managed by Chrome and can be reviewed or deleted in Chrome settings.

Local records remain in the browser until you delete them, reset the workspace, or clear the extension's stored data. Chrome Sync and Google Drive or Calendar copies may have separate retention and deletion behavior controlled by Google.

## Security

Google API requests use HTTPS and Google OAuth. Workspace content is stored in the browser profile and in the Google services you choose to use. TABONO does not add a separate encryption layer to local workspace data; protect access to your Chrome profile and device.

## Google API Limited Use

The publisher's use and transfer of information received from Google APIs will comply with the Google API Services User Data Policy, including its Limited Use requirements. Google API data is used only to provide the user-facing Calendar, Drive backup, and attachment features described above.

## Changes and contact

This policy may be updated when TABONO's data practices change. The latest version and its effective date will be published on this page. For privacy questions or requests, contact **[Replace with a monitored contact email]**.
