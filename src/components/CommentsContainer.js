import React from 'react'

const CommentsContainer = () => {

  const commentData = [
    {
      name: 'Parth',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      replies: [
        {
          name: 'Ravi',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          replies: [
            {
              name: 'Ravi',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              replies: [
                {
                  name: 'Ravi',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  replies: [
                    {
                      name: 'Ravi',
                      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                      replies: []
                    }
                  ]
                },
              ]
            }
          ]
        },
      ]
    },
    {
      name: 'Parth_2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      replies: [
        {
          name: 'Ravi',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          replies: [
            {
              name: 'Ravi',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              replies: [
                {
                  name: 'Ravi',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  replies: []
                },
                {
                  name: 'Ravi',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  replies: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Parth_3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      replies: [
        {
          name: 'Ravi',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          replies: [
            {
              name: 'Ravi',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              replies: [
                {
                  name: 'Ravi',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  replies: []
                },
                {
                  name: 'Ravi',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  replies: []
                }
              ]
            }
          ]
        }
      ]
    },
  ]

  const Comment = ({ data }) => {
    const { name, text } = data
    return <div className='bg-gray-500 p-2 my-2 rounded-lg'>
      <h2 className='font-semibold'>{name}</h2>
      <h2>{text}</h2>
    </div>
  }

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className='pl-4 border-2 border-y-0 border-l-white border-r-0'>
        <CommentsList comments={comment.replies}/>      {/* Recursively called CommentsList to render the replies (replies are nothing but another list of comments) */}
        </div>
      </div>
      ))
  }

  return (
    <div>
      <CommentsList comments={commentData} />
    </div>
  )
}

export default CommentsContainer
