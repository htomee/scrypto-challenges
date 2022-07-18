import { format } from 'date-fns';
import ColumnFilter from './ColumnFilter';

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    Footer: 'Id',
    // Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: 'Coupon Epoch',
    accessor: 'coupon_epoch',
    Footer: 'Coupon Epoch'
    // Filter: ColumnFilter
  },
  {
    Header: 'Maturity Epoch',
    accessor: 'maturity_epoch',
    Footer: 'Maturity Epoch'
    // Filter: ColumnFilter
  },
  {
    Header: 'Coupon Rate',
    accessor: 'coupon_rate',
    Footer: 'Coupon Rate'
    // Filter: ColumnFilter
  },
  {
    Header: 'Issue Price',
    accessor: 'issue_price',
    Footer: 'Issue Price'
    // Filter: ColumnFilter
  },
  // {
  //   Header: 'Issue Epoch',
  //   accessor: 'issue_epoch',
  //   Footer: 'Issue Epoch'
  // },
  // {
  //   Header: 'Supply',
  //   accessor: 'supply',
  //   Footer: 'Supply'
  // },
  {
    Header: 'Buy',
    //accessor: 'buy',
    Footer: 'Buy',
		//Cell: ({value}) => (<a >Buy</a>)
    //Cell: ({value}) => (<a onClick={()=>{console.log('clicked value', value)}}>Buy</a>)
    Cell: ({value}) => (<button onClick={console.log('clicked value', value)}>Buy</button>)
    
    // Cell: ({ cell }) => (
    //   <button value={cell.row.values.name} onClick={(this.props).handleClick}>
    //     Button
    //   </button>
    // )

  }
  // {
  //   Header: 'Date of Issue',
  //   accessor: 'date_of_issue',
  //   Footer: 'Date of Issue',
  //   Cell: ({ value }) => {
  //     return format(new Date(value), 'dd/MM/yyyy');
  //   }
  // },
  
];
console.log('sub columns: ', COLUMNS);

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
    Footer: 'Id'
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      { Header: 'Coupon Epoch', accessor: 'coupon_epoch', Footer: 'Coupon Epoch' },
      { Header: 'Maturity Epoch', accessor: 'maturity_epoch', Footer: 'Maturity Epoch' },
      { Header: 'Coupon Rate', accessor: 'coupon_rate', Footer: 'Coupon Rate' },
      { Header: 'Issue Price', accessor: 'issue_price', Footer: 'Issue Price' },
      //{ Header: 'Issue Epoch', accessor: 'issue_epoch', Footer: 'Issue Epoch' }
    ]
  }
];
