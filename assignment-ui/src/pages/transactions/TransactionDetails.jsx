import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import transactionDetailsService from "./TransactionDetailsService";
import { Table, Layout, Card } from "antd";
const { Content } = Layout;


export class TransactionDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        data: [],
      };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData(){
        this.setState({ loading: true }, () => {
            transactionDetailsService
              .loadTransactionDetails()
              .then(data => {
                    this.setState({ data });
                    //console.log(data);
              })
              .catch(err => {
                console.log("DEBUG err ", err);
              })
              .then(() => {
                this.setState({ loading: false });
              });
          });
    }

    handleAction = (record, nestedRecord) => {
        let viewText = record;
        return (
            <Link to={{pathname: "/child-details", state : { nestedRecord : nestedRecord } }}>
                <span>{viewText}</span>
            </Link>
        )
    }

    render() {
        const { data } = this.state;
        const columns = [
            {
              title: "ID",
              dataIndex: "id",
              defaultSortOrder: 'ascend',
              sorter: (a, b) => a.id - b.id,
            },
            {
              title: "Sender",
              dataIndex: "sender"
            },
            {
              title: "Receiver",
              dataIndex: "receiver"
            },
            {
              title: "Total Amount",
              dataIndex: "totalAmount"
            },
            {
              title: "Total Paid Amount",
              dataIndex: "totalPaidAmount",
              render: (record, nestedRecord) => this.handleAction(record, nestedRecord)
            },
        ];
        return (
            <div>
            <Layout style={{ minHeight: "100vh" }}>
              <Layout>
                <Content className="contentBody">
                <Card title="Parent" key={0}>
                    <Table
                        columns={columns}
                        dataSource={data.parent}
                        pagination={{ defaultPageSize: 2}}
                        showHeader={true}
                        rowKey={record => record.id}
                    />
                </Card>
                </Content>
            </Layout>
            </Layout>
            </div>
        )
    }

}

export default withRouter(TransactionDetails);