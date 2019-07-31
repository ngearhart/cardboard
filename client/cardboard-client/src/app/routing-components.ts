import { Component, ViewChild, Inject, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSpinner } from '@angular/material/progress-spinner';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';

@Component({
    selector: 'music-manager',
    templateUrl: './routing-components/music-manager.html'
})
export class MusicManagerComponent {
    music = [];

    unloaded: boolean = true;
    //ViewChild('loading') spinner: MatSpinner;

    constructor(http: HttpClient, private dialog: MatDialog) {
        http.get("http://" + window.location.hostname + "/box-api/list-music").subscribe(res => {
            this.unloaded = false;
            //var data = JSON.parse(res);
            this.music = res as any[];
        });
    }

    openViewer(id, title): void {
        this.dialog.open(MusicViewerDialog, {data: {id: id, title: title}});
    }
}

@Component({
    selector: 'music-viewer-dialog',
    templateUrl: './routing-components/music-viewer-dialog.html'
})
export class MusicViewerDialog implements OnInit {
    ngOnInit(): void {

        // - - - Only necessary if using id. Multiple dialogs might break this
        // var i: number = 0;
        // while (!document.getElementById('cdk-overlay-' + i++));
        // document.getElementById('cdk-overlay-' + --i).style.maxWidth = '100vw';

        document.getElementsByClassName("cdk-overlay-pane")[0]["style"].maxWidth = '100vw';
    }
    title;
    id;
    url: SafeResourceUrl;

    frameLoaded: boolean = false;
    
    @ViewChild('iframe', { static: true }) iframe: ElementRef;

    constructor(
        private self: MatDialogRef<MusicViewerDialog>,
        @Inject(MAT_DIALOG_DATA) data: any, sanitizer: DomSanitizer) {
            this.title = data.title;
            this.id = data.id;
            this.url = sanitizer.bypassSecurityTrustResourceUrl("box-api/download?id=" + this.id);
        }

    close(): void {
        this.self.close();
    }
 
    iframeLoaded(): void {
        this.frameLoaded = true;
        this.iframe.nativeElement.style.visibility = "visible";
        console.log("load");
        //this.iframe.nativeElement.width = 0.45 * window.outerWidth;
        //this.iframe.nativeElement.height = 0.9 * window.outerHeight;
    }
}

@Component({
    selector: 'part-manager',
    template: '<p>Part Manager</p>'
})
export class PartManagerComponent {

}

@Component({
    selector: 'user-manager',
    template: '<p>User Manager</p>'
})
export class UserManagerComponent {

}