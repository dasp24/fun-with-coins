import { Component, OnInit, Input } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() data;
  public title = 'Line Chart';
  formattedData: any[];
  private margin = {top: 20, right: 20, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>; // this is line defination

  constructor() { 
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit(): void {
    this.formattedData = this.setGraphData(this.data);
    // console.log(this.data)
    this.buildSvg();
    this.addXandYAxis();
    this.drawLineAndPath();
    this.addFun();
  }

  private addFun() {
    
    d3.select('svg')
    .on('mousemove', (d) => { 
      const position = d3.pointer(d);
      this.svg.append('circle')
              .attr('fill', 'red')
              .attr('r', 1.5)
              .attr('cx', position[0])
              .attr('cy', position[1])});
  }

  private setGraphData(data) {
    const timeValueArray = data.Data.Data;
    return timeValueArray.map(item => {
       return {
        date: new Date(item.time * 1000),
        value: (item.high + item.low) / 2
    };
  });
  }

  private buildSvg() {
    this.svg = d3.select('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')')
     
      // .on("mousemove", ()=> {
      //   let pos = d3.mouse(this);
      //     d3.select(this)
      //         .append("circle")
      //         .attr("fill", "red")
      //         .attr("r", 1.5)
      //         .attr("cx", pos[0])
      //         .attr("cy", pos[1])
      // })
  }

  private addXandYAxis() {
    // range of data configuring
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.formattedData, (d) => d.date ));
    this.y.domain(d3Array.extent(this.formattedData, (d) => d.value ));
    // Configure the X Axis
    this.svg.append('g')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x));
    // Configure the Y Axis
    this.svg.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y));
  }

  private drawLineAndPath() {
    const div = d3.select("body").append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

    this.line = d3Shape.line()
        .x( (d: any) => this.x(d.date) )
        .y( (d: any) => this.y(d.value) );
    // Configuring line path
    this.svg.append('path')
        .datum(this.formattedData)
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', '#000')
        .attr('d', this.line)
        .on('mouseover', (d) => {
          console.log(d);
          div.transition()
             .duration(200)
             .style('opacity', .9);
          div.html('a tooltip <br/>' + d.date +'<br/>' + d.prediction)
             .style('left', (12) + 'px')
             .style('top', (28) + 'px');
})
.on('mouseout', (d) => {
            div.transition()
               .duration(500)
               .style('opacity', 0);
});
  }

}
