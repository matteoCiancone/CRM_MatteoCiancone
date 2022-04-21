import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comuni } from 'src/app/classes/comuni/comuni';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { ComuniService } from 'src/app/services/comuni/comuni.service';

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.css']
})
export class ComuniComponent implements OnInit {

  comuni: IComuni[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  selectedComune!:Comuni



  constructor(private comuniService: ComuniService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.comuniService.getComuniByPage(params["page"]).subscribe((comuni:any) => {
        this.comuni = comuni.content
        this.totalElements = comuni.totalElements
        this.size = comuni.size
        this.numberOfPages = (comuni.totalElements / comuni.size)
      for(let i = 0; i <= this.numberOfPages; i++){
          console.log(i);
          this.pageNumbers.push(i);
        }
      });
    })

  
}


removeComuni(comuni: IComuni) {
  this.comuniService.deleteComune(comuni).subscribe(res => {
    this.comuni = this.comuni.filter(comuni => comuni.id !== comuni.id) 
  });
}

selectComune(item:IComuni){
  this.router.navigate(["editComuni/", item.id])
}

}
