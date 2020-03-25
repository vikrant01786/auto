import { Component, OnInit } from '@angular/core';
import { IntimationService } from '../../services/intimation.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  dtOptions: any = {};
  dtTrigger: Subject<ViewReportComponent> = new Subject();

  constructor( private route: ActivatedRoute,
    private intimationService: IntimationService ,
    private toastrService: ToastrService,
    ) { }


 public intimationid = parseInt(this.route.snapshot.paramMap.get('IntimationID'), 10);

 env = environment;

ReportData:any=[];
  ngOnInit() {

    this.display();

  }

display(){

  this.intimationService.getreportdetails(this.intimationid).subscribe(data => {
    this.ReportData = data;
    console.log( this.ReportData, 'abc');
  });

}

showSuccess(display, Message) {
  this.toastrService.success(display, Message);
}

showFailure(error, Message) {
  this.toastrService.error(error, Message);
}

}
