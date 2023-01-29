import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { ProfileResponse, ProfileService } from '../../services/profile.service'

@Component({
    selector: 'first-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    profile$!: Observable<ProfileResponse>

    constructor(
        private profileService: ProfileService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        const userId = Number(this.route.snapshot.paramMap.get('userId'))
        if (userId) {
            this.profile$ = this.profileService.getProfile(userId)
        }
    }
    backToUsersHandler() {
        this.router.navigate(['/users'])
    }
}
