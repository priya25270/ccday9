import React from 'react'


export default function Singers() {
  return (
    <div id="color">
      <table style={{width:"30%" ,marginLeft:"32rem"}} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Harry</td>
            <td>2003</td>
          </tr>
          <tr>
            <td scope='row'>Aniruth</td>
            <td>2022</td>
          </tr>
          <tr>
            <td scope='row'>AR Rahman</td>
            <td>2010</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}