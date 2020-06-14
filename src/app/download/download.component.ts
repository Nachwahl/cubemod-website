import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MarkdownService} from 'ngx-markdown';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  public versions;
  public version;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://cubemod.nachwahl.dev/version').subscribe((res) => {
      // @ts-ignore
      this.version = res.version;
    });
    this.httpClient.get('https://cubemod.nachwahl.dev/changelogs').subscribe((res) => {
      // @ts-ignore
      this.versions = res;
    });
  }

}
