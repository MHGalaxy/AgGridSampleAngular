import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ProductService } from '../services/product.service';
import { myTheme } from '../themes/ag-grid-theme';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './products.html',
})
export class ProductsComponent {
  gridOptions = {
    suppressMiddleClickScrolls: true, // default
  };

  rowData: any[] = [];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    floatingFilter: true,
  };

  columnDefs: ColDef[] = [
    { field: 'id', width: 90, pinned: 'left' },
    { field: 'code', width: 120 },
    { field: 'name', width: 180 },
    { field: 'category', width: 140 },
    { field: 'supplier', width: 150 },
    { field: 'brand', width: 120 },
    { field: 'model', width: 120 },
    { field: 'color', width: 120 },
    { field: 'country', width: 120 },

    {
      field: 'price',
      width: 120,
      valueFormatter: (p) => `$${p.value}`,
    },

    {
      field: 'cost',
      width: 120,
      valueFormatter: (p) => `$${p.value}`,
    },

    { field: 'quantity', width: 120 },
    { field: 'reserved', width: 120 },
    { field: 'sold', width: 120 },
    { field: 'rating', width: 110 },
    { field: 'weight', width: 120 },
    { field: 'width', width: 120 },
    { field: 'height', width: 120 },
    { field: 'depth', width: 120 },

    {
      field: 'warranty',
      headerName: 'Warranty (Months)',
      width: 170,
    },

    {
      field: 'createdDate',
      headerName: 'Created',
      width: 150,
    },

    {
      field: 'updatedDate',
      headerName: 'Updated',
      width: 150,
    },

    {
      field: 'isActive',
      width: 120,
    },

    {
      field: 'status',
      width: 120,
    },

    {
      field: 'description',
      width: 300,
    },
  ];

  theme = myTheme;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((data) => {
      this.rowData = data;
    });
  }

  protected readonly myTheme = myTheme;
}
