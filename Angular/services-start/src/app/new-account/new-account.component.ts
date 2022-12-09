import { Component} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
    private AccountsService: AccountsService) {
      this.AccountsService.statusUpdated.subscribe(
        (status: string) => alert('new status: ' + status)
      );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.AccountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
