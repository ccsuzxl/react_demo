import React from 'react'
import { Card, Icon } from 'antd'

class Cards extends React.Component {
  render () {
    return (
      <div className="Cards">
        <Card title="Card title">
          <p
            style={{
              fontSize: 14,
              color: 'rgba(0, 0, 0, 0.85)',
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            Group title
          </p>
          <Card type="inner" title="Inner Card title" extra={<a href="Cards">More</a>}>
            Inner Card content
            </Card>
          <Card
            style={{ width: 400, marginTop: 16 }}
            type="inner"
            title="Inner Card title"
            extra={<a href="Cards">More</a>}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            actions={[
              <Icon type="setting" key="setting" />,
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
          >
            Inner Card content
            </Card>
        </Card>
      </div>
    )
  }
}

export default Cards;