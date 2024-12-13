import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons  } from 'primeng/api';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss'],
 
})
export class BotonesComponent implements OnInit {

  loading: boolean = false;

load() {
  this.loading = true;
  console.log('Cargando...');

  setTimeout(() => {
    this.loading = false;
    console.log('Carga completada');
  }, 2000);


}
  items: MenuItem[] = [];
  opciones = [
    { label: 'Opción 1', value: 'opcion1' },
    { label: 'Opción 2', value: 'opcion2' },
    { label: 'Opción 3', value: 'opcion3' }
  ];
  selectedOption: any;

  primeIcons: string[] = [
    'pi pi-align-center', 'pi pi-align-justify', 'pi pi-align-left', 'pi pi-align-right',
    'pi pi-amazon', 'pi pi-android', 'pi pi-angle-double-down', 'pi pi-angle-double-left',
    'pi pi-angle-double-right', 'pi pi-angle-double-up', 'pi pi-angle-down', 'pi pi-angle-left',
    'pi pi-angle-right', 'pi pi-angle-up', 'pi pi-apple', 'pi pi-arrow-circle-down',
    'pi pi-arrow-circle-left', 'pi pi-arrow-circle-right', 'pi pi-arrow-circle-up', 'pi pi-arrow-down',
    'pi pi-arrow-down-left', 'pi pi-arrow-down-right', 'pi pi-arrow-left', 'pi pi-arrow-right',
    'pi pi-arrow-right-arrow-left', 'pi pi-arrow-up', 'pi pi-arrow-up-left', 'pi pi-arrow-up-right',
    'pi pi-arrows-alt', 'pi pi-arrows-h', 'pi pi-arrows-v', 'pi pi-at', 'pi pi-backward',
    'pi pi-ban', 'pi pi-bars', 'pi pi-bell', 'pi pi-bitcoin', 'pi pi-bolt', 'pi pi-book',
    'pi pi-bookmark', 'pi pi-bookmark-fill', 'pi pi-box', 'pi pi-briefcase', 'pi pi-building',
    'pi pi-calculator', 'pi pi-calendar', 'pi pi-calendar-minus', 'pi pi-calendar-plus',
    'pi pi-calendar-times', 'pi pi-camera', 'pi pi-car', 'pi pi-caret-down', 'pi pi-caret-left',
    'pi pi-caret-right', 'pi pi-caret-up', 'pi pi-cart-plus', 'pi pi-chart-bar', 'pi pi-chart-line',
    'pi pi-chart-pie', 'pi pi-check', 'pi pi-check-circle', 'pi pi-check-square',
    'pi pi-chevron-circle-down', 'pi pi-chevron-circle-left', 'pi pi-chevron-circle-right',
    'pi pi-chevron-circle-up', 'pi pi-chevron-down', 'pi pi-chevron-left', 'pi pi-chevron-right',
    'pi pi-chevron-up', 'pi pi-circle', 'pi pi-circle-fill', 'pi pi-clock', 'pi pi-clone',
    'pi pi-cloud', 'pi pi-cloud-download', 'pi pi-cloud-upload', 'pi pi-code', 'pi pi-cog',
    'pi pi-comment', 'pi pi-comments', 'pi pi-compass', 'pi pi-copy', 'pi pi-credit-card',
    'pi pi-database', 'pi pi-delete-left', 'pi pi-desktop', 'pi pi-directions',
    'pi pi-directions-alt', 'pi pi-discord', 'pi pi-dollar', 'pi pi-download', 'pi pi-eject',
    'pi pi-ellipsis-h', 'pi pi-ellipsis-v', 'pi pi-envelope', 'pi pi-eraser', 'pi pi-euro',
    'pi pi-exclamation-circle', 'pi pi-exclamation-triangle', 'pi pi-external-link', 'pi pi-eye',
    'pi pi-eye-slash', 'pi pi-facebook', 'pi pi-fast-backward', 'pi pi-fast-forward', 'pi pi-file',
    'pi pi-file-edit', 'pi pi-file-excel', 'pi pi-file-export', 'pi pi-file-import', 'pi pi-file-pdf',
    'pi pi-file-word', 'pi pi-filter', 'pi pi-filter-fill', 'pi pi-filter-slash', 'pi pi-flag',
    'pi pi-flag-fill', 'pi pi-folder', 'pi pi-folder-open', 'pi pi-forward', 'pi pi-gift',
    'pi pi-github', 'pi pi-globe', 'pi pi-google', 'pi pi-hashtag', 'pi pi-heart', 'pi pi-heart-fill',
    'pi pi-history', 'pi pi-home', 'pi pi-hourglass', 'pi pi-id-card', 'pi pi-image', 'pi pi-images',
    'pi pi-inbox', 'pi pi-info', 'pi pi-info-circle', 'pi pi-instagram', 'pi pi-key',
    'pi pi-language', 'pi pi-link', 'pi pi-linkedin', 'pi pi-list', 'pi pi-lock', 'pi pi-lock-open',
    'pi pi-map', 'pi pi-map-marker', 'pi pi-megaphone', 'pi pi-microphone', 'pi pi-microsoft',
    'pi pi-minus', 'pi pi-minus-circle', 'pi pi-mobile', 'pi pi-money-bill', 'pi pi-moon',
    'pi pi-palette', 'pi pi-paperclip', 'pi pi-pause', 'pi pi-paypal', 'pi pi-pencil', 'pi pi-percentage',
    'pi pi-phone', 'pi pi-play', 'pi pi-plus', 'pi pi-plus-circle', 'pi pi-pound', 'pi pi-power-off',
    'pi pi-prime', 'pi pi-print', 'pi pi-qrcode', 'pi pi-question', 'pi pi-question-circle',
    'pi pi-reddit', 'pi pi-refresh', 'pi pi-replay', 'pi pi-reply', 'pi pi-save', 'pi pi-search',
    'pi pi-search-minus', 'pi pi-search-plus', 'pi pi-send', 'pi pi-server', 'pi pi-share-alt',
    'pi pi-shield', 'pi pi-shopping-bag', 'pi pi-shopping-cart', 'pi pi-sign-in', 'pi pi-sign-out',
    'pi pi-sitemap', 'pi pi-slack', 'pi pi-sliders-h', 'pi pi-sliders-v', 'pi pi-sort',
    'pi pi-sort-alpha-down', 'pi pi-sort-alpha-down-alt', 'pi pi-sort-alpha-up',
    'pi pi-sort-alpha-up-alt', 'pi pi-sort-alt', 'pi pi-sort-alt-slash', 'pi pi-sort-amount-down',
    'pi pi-sort-amount-down-alt', 'pi pi-sort-amount-up', 'pi pi-sort-amount-up-alt',
    'pi pi-sort-down', 'pi pi-sort-numeric-down', 'pi pi-sort-numeric-down-alt',
    'pi pi-sort-numeric-up', 'pi pi-sort-numeric-up-alt', 'pi pi-sort-up', 'pi pi-spinner',
    'pi pi-star', 'pi pi-star-fill', 'pi pi-step-backward', 'pi pi-step-backward-alt',
    'pi pi-step-forward', 'pi pi-step-forward-alt', 'pi pi-stop', 'pi pi-stop-circle', 'pi pi-stopwatch',
    'pi pi-sun', 'pi pi-sync', 'pi pi-table', 'pi pi-tablet', 'pi pi-tag', 'pi pi-tags', 'pi pi-telegram',
    'pi pi-th-large', 'pi pi-thumbs-down', 'pi pi-thumbs-down-fill', 'pi pi-thumbs-up',
    'pi pi-thumbs-up-fill', 'pi pi-ticket', 'pi pi-times', 'pi pi-times-circle', 'pi pi-trash',
    'pi pi-truck', 'pi pi-twitter', 'pi pi-undo', 'pi pi-unlock', 'pi pi-upload', 'pi pi-user',
    'pi pi-user-edit', 'pi pi-user-minus', 'pi pi-user-plus', 'pi pi-users', 'pi pi-verified',
    'pi pi-video', 'pi pi-vimeo', 'pi pi-volume-down', 'pi pi-volume-off', 'pi pi-volume-up',
    'pi pi-wallet', 'pi pi-whatsapp', 'pi pi-wifi', 'pi pi-window-maximize', 'pi pi-window-minimize',
    'pi pi-wrench', 'pi pi-youtube'
  ];

  constructor() {
    this.items = [
      {
        label: 'Nuevo',
        icon: PrimeIcons.PLUS
      },
      {
        label: 'Eliminar',
        icon: PrimeIcons.TRASH
      }
    ];
  }

  ngOnInit() {
  }
}
