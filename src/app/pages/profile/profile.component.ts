import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { ProfileResponse, ProfileService } from './services/profile.service'

@Component({
    selector: 'first-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    profile$!: Observable<ProfileResponse>

    constructor(private route: ActivatedRoute, private profileService: ProfileService) {}

    ngOnInit(): void {
        const userId = Number(this.route.snapshot.paramMap.get('userId'))
        if (userId) {
            this.profile$ = this.profileService.getProfile(userId)
        }
    }
}
