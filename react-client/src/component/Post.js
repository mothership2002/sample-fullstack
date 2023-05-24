import React, { useEffect, useState } from 'react'
import { Button, Placeholder } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { postCss } from '../stores/css/PostCss';
import Utils from '../common/Utils';

const Post = () => {

  // css
  const css = useRecoilValue(postCss);
  const utils = new Utils();

  const [mockList, setMockList] = useState([]);
  const [postList, setPostList] = useState([]);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setMockList(preList => [...preList, PlaceholderObject(-1), PlaceholderObject(-2)]);
    selectPostList();

    window.addEventListener('scroll', onscroll);
    return () => {
      window.removeEventListener('scroll', onscroll);
    }
  }, [])
  
  const onscroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    console.log(scrollPosition);
  }

  const ContentComponent = (element) => {
    return (
      <div className={utils.returnCssClassArray(css.postContainer)}>
        <div className={utils.returnCssClassArray(css.postInfoContainer)}>
          <div className={utils.returnCssClassArray(css.postTitle)}>
            {element.obj.postTitle}
          </div>
          <div className={utils.returnCssClassArray(css.postDetailInfoContainer)}>
            <div className={utils.returnCssClassArray(css.dateContainer)}>
              <div className={utils.returnCssClassArray(css.createInfo)}>
                {element.obj.creater}
              </div>
              <div className={utils.returnCssClassArray(css.createInfo)}>
                {element.obj.createdAt}
              </div>
              <div className={utils.returnCssClassArray(css.createInfo)}>
                {element.obj.modifiedAt}
              </div>
            </div>
            <div className={utils.returnCssClassArray(css.btnArea)}>
              {element.obj.buttonArea ?
                element.obj.buttonArea :
                <>
                  <Button bsPrefix={btnCss('primary')}>
                    Modify
                  </Button>
                  <Button bsPrefix={btnCss('danger')}>
                    Delete
                  </Button>
                </>
              }
            </div>
          </div>
        </div>
        <div className={utils.returnCssClassArray(css.postContentContainer)}>
          {element.obj.postContent}
        </div>
        <div className={'p-3 border border-secondary border-2 m-1 rounded' } style={{minHeight:'150px'}}>
          coment 이건 생각해봐야겟다
        </div>
        
      </div>
    )
  }

  const btnCss = (string) => {
    return 'btn btn-outline-' + string +' btn-sm m-2';
  }
  
  ///////////////////////////sample data///////////////////////////////////////
  const sampleSync = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(temp());
      }, ms)
    })
  }

  const temp = () => {
    const array = [];
    for (let a = 1; a < 6; a++) {
      if (a % 2 == 1) {
        array.push(
          {
            postId: a,
            postTitle: '테스트 ' + a + '번째 글',
            postContent: '내용 테스트 이건 근데 xss도 막아야대고 할게 많네 ' + a,
            createdAt: '2023-01-0' + a,
            creater: '누군가' + a,
            modifiedAt: null,
            titleKey: 'titleKey',
            contentKey: 'contentKey',
          }
        )
      }
      else {
        array.push(
          {
            postId: a,
            postTitle: '테스트 ' + a + '번째 글',
            postContent: '내용 테스트 이건 근데 xss도 막아야대고 할게 많네 ' + a,
            createdAt: '2023-01-0' + a,
            creater: '누군가' + a,
            modifiedAt: '2023-01-2' + a,
          }
        )
      }
    }
    return array;
  }
  
  // 이걸 무한스크롤 형식으로 사용할려면 함수로 빼야함
  const selectPostList = async (startPage = 1, count = 10) => {
    const data = await sampleSync(3000);  
    setPostList(preList => [...preList, ...data]);
  }
  ///////////////////////////sample data///////////////////////////////////////

  /** 플레이스 홀더 생성 
   * 
   * @param {길이} random 
   * @returns placeholder component
   */
  const randomPlaceholder = (random, flag) => {
    return Array.from({ length: random }).map((_, index) => {
      return createPlaceholder(index, flag);
    })
  }

  const createPlaceholder = (index, flag) => {
    const style = flag
    const keyInt = Math.ceil(Math.random() * 10);
    return (
      <span className={style} key={keyInt + '_' + index}>
        <Placeholder xs={keyInt}/> 
        &nbsp;
      </span>
    )
  }

  const PlaceholderObject = (id) => {
    return {
      postId: 'pk'+ id,
      postTitle: randomPlaceholder(2, utils.returnCssClassArray(css.placeholderContainer)),
      creater: <Placeholder xs={7} bg='secondary' size='lg' />,
      createdAt: <Placeholder xs={10} bg='secondary' size='lg'/>,
      modifiedAt: <Placeholder xs={9} bg='secondary' size='lg' />,
      buttonArea: (
        <>
          <Placeholder.Button xs={10} aria-hidden='true' variant='outline-primary' />
          <Placeholder.Button xs={10} aria-hidden='true' variant='outline-danger'/>
        </>
      ),
      postContent: randomPlaceholder((4 + Math.random()) * 3, null),
    }
  }

  const renderingComponet = (array) => {
    return array.map((element) => {
      return (
        <ContentComponent obj={element} key={element.postId.toString()} />
      )
    })
  }

  return (
    <>
      {renderingComponet(postList)}
      {renderingComponet(mockList)}
    </>
  )
}

export default Post;