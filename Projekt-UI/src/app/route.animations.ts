import { transition, query, style, animate, trigger, group, state } from '@angular/animations';

export const fadeAnimation =
    trigger('fadeAnimation', [
        transition('* => *', [
            query(':enter', [
                style({
                    opacity: 0
                })
            ], { optional: true }),
            query(':leave', [
                style({ opacity: 1 }),
                animate('1000ms', style({ opacity: 0 }))
            ], { optional: true }),
            query(':enter', [
                style({ opacity: 0 }),
                animate('1000ms ease-in', style({ opacity: 1 }))
            ], { optional: true })
        ])
    ])