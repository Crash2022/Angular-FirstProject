import { Component, OnInit } from '@angular/core'
import { User, UsersService } from '../../services/users.service'
import { Observable } from 'rxjs'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
    selector: 'first-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users$!: Observable<User[]>

    constructor(
        private usersService: UsersService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        // 1-ый вариант
        /*const page = Number(this.route.snapshot.queryParamMap.get('page'))
        const currentPage = page ? page : 1
        this.getUsers(currentPage)*/

        // 2-ой вариант
        this.route.queryParams.subscribe((params: Params) => {
            this.getUsers(params['page'] ? params['page'] : 1)
        })
    }

    getUsers(page: number) {
        this.users$ = this.usersService.getUsers(page)
    }

    nextPageHandler() {
        const page = Number(this.route.snapshot.queryParamMap.get('page'))
        const nextPage = page ? page + 1 : 2

        // 1-ый вариант: достаем query параметры и переходим на следующую страницу
        /*this.router
            .navigateByUrl(`/users?page=${nextPage}` /!*, { skipLocationChange: true }*!/)
            .then(() => {
                this.getUsers(nextPage)
            })*/

        // 2-ой вариант // более удобный и краткий
        this.router.navigate(['/users'], { queryParams: { page: nextPage } }).then(() => {
            this.getUsers(nextPage)
        })
    }
}
