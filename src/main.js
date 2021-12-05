/* main.js
 *
 * Copyright 2021 Rohan M.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

pkg.initGettext();
pkg.initFormat();
pkg.require({
  'Gio': '2.0',
  'Gtk': '4.0'
});

const { Gio, Gtk } = imports.gi;

const { PostsWindow } = imports.window;

function main(argv) {
    const application = new Gtk.Application({
        application_id: 'me.rmirshra.clamptools.posts',
        flags: Gio.ApplicationFlags.FLAGS_NONE,
    });

    application.connect('activate', app => {
        let activeWindow = app.activeWindow;

        if (!activeWindow) {
            activeWindow = new PostsWindow(app);
        }

        activeWindow.present();
    });

    return application.run(argv);
}
