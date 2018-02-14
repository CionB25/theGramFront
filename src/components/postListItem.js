import React from 'react'
import Microposts from './microposts'
import { Card, Icon, Image } from 'semantic-ui-react'

const PostListItem = () => (
  <Card>
    <Image src='https://www.dailydot.com/wp-content/uploads/154/0e/052c95b7885585c3-2048x1024.jpg' />
    <Card.Content>
      <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
      <Card.Meta></Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
      <Microposts/>
    </Card.Content>
  </Card>
)

export default PostListItem
