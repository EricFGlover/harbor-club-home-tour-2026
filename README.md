# Harbor Club Christmas Home Tour — live site

Thursday, November 19, 2026 · 100% of proceeds benefit the Greene County Food Pantry.

## What's in this folder

| File | What it is | Do you edit it? |
|---|---|---|
| `index.html` | The website | No |
| `config.js` | Date, hours, price, charity text, Google Sheet link | Yes, rarely |
| `homes.json` | Backup list of homes (used only if no Google Sheet is linked) | Only if you skip the Sheet |
| `homes-template.csv` | Your 7 homes, ready to import into the Google Sheet | Import once |
| `qr.html` | Makes the QR code for the back of the ticket | No |
| `assets/ticket-art.jpg` | Your ticket artwork | No |

---

## Step 1 — Make two free accounts (10 min)
1. **GitHub** (github.com) — this holds the website files.
2. **Vercel** (vercel.com) — choose **Continue with GitHub** so the two are linked.

## Step 2 — Put the files on GitHub (5 min)
1. On GitHub, click **+ → New repository**. Name it `harbor-club-home-tour`. Leave everything else as is. Click **Create repository**.
2. On the next screen click **uploading an existing file**.
3. Unzip the folder on your computer and drag **everything inside it** (including the `assets` folder) onto the page. Click **Commit changes**.

## Step 3 — Publish on Vercel (3 min)
1. In Vercel click **Add New → Project**, find `harbor-club-home-tour`, click **Import**.
2. Framework Preset: **Other**. Click **Deploy**.
3. You get a link like `harbor-club-home-tour.vercel.app`. To choose a nicer name: **Settings → Domains → Edit** (e.g. `harborclubhometour.vercel.app`). **Pick the final name before you make the QR code.**

## Step 4 — Set up the Google Sheet for homes (10 min, one time)
This is what lets you or your wife add or drop a home from a phone, right up to tour morning, with no website changes.
1. Google Sheets → **Blank** → **File → Import → Upload** `homes-template.csv` → **Replace current sheet**.
2. **File → Share → Publish to web**. Pick the sheet tab, choose **Comma-separated values (.csv)**, click **Publish**, copy the link.
3. On GitHub, open `config.js`, click the pencil icon, paste the link between the quotes on the `sheetCsvUrl:` line, click **Commit changes**. Vercel republishes in about 30 seconds.
4. Share the Sheet (normal Share button) with anyone on the committee who should be able to edit homes.

**Columns**
- `number` — the number shown in the map circle.
- `name` — e.g. "The Smith Home".
- `address` — full street address.
- `lat`, `lng` — exact location. In Google Maps, right-click the house, click the numbers at the top of the menu to copy them, and paste: the first number into `lat`, the second into `lng`. If you leave these blank the site looks the address up itself, but lake roads are sometimes placed imprecisely, so exact coordinates are better.
- `note` — optional line such as parking instructions.
- `show` — `yes` to show, `no` to hide. Use `no` for a cancellation instead of deleting the row.

Changes appear on the site within about 5 minutes (Google refreshes published sheets on its own schedule). Open pages refresh themselves every 3 minutes.

## Step 5 — Food Pantry logo (optional, 2 min)
The site already shows the Pantry's logo from their own website. For a permanent copy, save their logo from gcfpantry.org as `gcfp-logo.png`, upload it into the `assets` folder on GitHub. It's courteous to let the Pantry know you're featuring them; they may send a high-resolution version.

## Step 6 — QR code for the ticket (2 min)
1. Open `your-site-name.vercel.app/qr.html`.
2. Click **Download SVG** for your printer (sharpest), or PNG for Word/Canva.
3. Print it at least 1 inch square on a light background. Test a proof with an iPhone and an Android.

The QR code only points at the website, so it never needs reprinting when homes change.

## Tour-week checklist
- [ ] Every home's pin lands on the right driveway (zoom in on the map).
- [ ] Tap each address on a phone; directions open correctly.
- [ ] Tap **Use my location** from the clubhouse and check the order makes sense.
- [ ] Have a second committee member able to edit the Sheet in case you're busy on tour day.
