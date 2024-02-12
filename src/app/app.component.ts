import { Component } from '@angular/core';
import { Ipipe } from './interface/filesize';
import { Iplayers } from './interface/player';
import { cricketers } from './arrayinfo/arrayinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipLorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptatibus sint tempore amet repellendus maiores nesciunt ducimus! Ipsa consequuntur cupiditate, totam provident blanditiis nostrum temporibus sed delectus ipsam nemo at dignissimos saepe! Atque porro maxime veniam unde? Est, autem vel facere eum reprehenderit dolores sit! Placeat dignissimos aliquam nulla minima eum, soluta ipsam itaque, odit adipisci quas quos corrupti amet est sunt porro obcaecati at. Sapiente voluptate explicabo iusto obcaecati nobis sunt consequuntur, non libero culpa totam soluta doloremque ipsa laboriosam error in est porro hic doloribus magnam quibusdam mollitia dignissimos? Mollitia officiis, id natus quisquam iste animi ea voluptate porro aliquid, architecto doloremque, corrupti molestiae quam magnam? Tempora, voluptatibus unde! Laudantium ullam eaque modi ipsum tempore cupiditate hic vero eum et quia, quidem magni odio debitis commodi architecto, vitae asperiores delectus minima quibusdam, recusandae ratione? Explicabo tempore quas voluptatibus unde culpa deleniti quidem impedit cupiditate, nulla quod ipsum, iure, nesciunt ea tenetur iste. Architecto dolores fugit veniam eveniet soluta quas similique magni sequi voluptas, facere eos ea obcaecati provident animi tempora adipisci, expedita doloremque neque praesentium nihil eligendi ab culpa? Nemo consectetur error in minima dolorum consequatur suscipit possimus fugit? Ea a veritatis reiciendis. Iste labore doloremque cumque magni!es';

  playersdata : Array<Iplayers> = cricketers

  filesArr : Array<Ipipe> = [
    {
      filename : 'Form 16',
      type : 'pdf',
      size : 7394729,
    },
    {
      filename : 'Form 10',
      type : 'doc',
      size : 3435743,
    },
    {
      filename : 'Form A',
      type : 'excel',
      size : 245565656,
    },
    {
      filename : 'Form B',
      type : 'pdf',
      size : 73729,
    }
  ]

  course ={
    title : 'MEAN Stack Developer',
    students : 123456,
    coursefee : 199.99,
    rating : 9.99,
    releaseDate : new Date(2024, 1, 4)
  }
  // imgDoc = ''
}
