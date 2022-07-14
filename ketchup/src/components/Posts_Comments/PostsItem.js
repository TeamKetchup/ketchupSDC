import React from "react";
import styled from "styled-components";
import avatar from "./avatar.png";

function PostsItem({
  id,
  post_header,
  post_body,
  media,
  date,
  user_id,
  community_id,
}) {
  return (
    <PostItemContainer className="post-1">
      <HeaderContainer>
        <a
          click-id="subreddit-id"
          className="subreddit-name"
          href="/k/TeamKetchup"
        >
          <HeaderImg src={avatar} alt="image" />
        </a>
        <h1>{post_header}</h1>
      </HeaderContainer>
      <PBodyContainer>{post_body}</PBodyContainer>
      <PostMediaContainer>{media}</PostMediaContainer>
      <PostFooter>
        <div>
          <FooterItems>
            <a
              rel="nofollow"
              data-click-id="comments"
              data-test-id="comments-page-link-num-comments"
              class="_1UoeAeSRhOKSNdY_h3iS1O _1Hw7tY9pMr-T1F4P1C-xNU _3U_7i38RDPV5eBv7m4M-9J _2qww3J5KKzsD7e5DO0BvvU"
              href="/"
            >
              <i
                class="icon icon-comment _3DVrpDrMM9NLT6TlsTUMxC"
                role="presentation"
              ></i>
              <span class="FHCV02u6Cp2zYL0fhQPsO">1.6k comments</span>
            </a>
            <div
              class="_JRBNstMcGxbZUxrrIKXe _3U_7i38RDPV5eBv7m4M-9J _3yh2bniLq7bYr4BaiXowdO _1pShbCnOaF7EGWTq6IvZux _3sUJGnemgtNczijwoT8PGg"
              id="t3_vxiwz5-overlay-share-menu"
            >
              <button data-click-id="share" class="kU8ebCMnbXfjCWfqn0WPb">
                <i class="icon icon-share _1GQDWqbF-wkYWbrpmOvjqJ"></i>
                <span class="_6_44iTtZoeY6_XChKt5b0">share</span>
              </button>
            </div>
            <div data-ignore-click="false" class="_3U_7i38RDPV5eBv7m4M-9J">
              <button class="_10K5i7NW6qcm-UoCtpB3aK YszYBnnIoNY8pZ6UwCivd _3yh2bniLq7bYr4BaiXowdO _2sAFaB0tx4Hd5KxVkdUcAx _3sUJGnemgtNczijwoT8PGg">
                <span class="pthKOcceozMuXLYrLlbL1">
                  <i class="_1Xe01txJfRB9udUU85DNeR icon icon-save"></i>
                </span>
                <span class="_2-cXnP74241WI7fpcpfPmg _70940WUuFmpHbhKlj8EjZ">
                  save
                </span>
              </button>
            </div>
            <div data-ignore-click="false" class="_3U_7i38RDPV5eBv7m4M-9J">
              <button class="_10K5i7NW6qcm-UoCtpB3aK YszYBnnIoNY8pZ6UwCivd _3yh2bniLq7bYr4BaiXowdO _2sAFaB0tx4Hd5KxVkdUcAx _3sUJGnemgtNczijwoT8PGg">
                <span class="pthKOcceozMuXLYrLlbL1">
                  <i class="icon icon-hide"></i>
                </span>
                <span class="_2-cXnP74241WI7fpcpfPmg _70940WUuFmpHbhKlj8EjZ">
                  hide
                </span>
              </button>
            </div>
            <div data-ignore-click="false" class="_3U_7i38RDPV5eBv7m4M-9J">
              <button class="_10K5i7NW6qcm-UoCtpB3aK YszYBnnIoNY8pZ6UwCivd _3yh2bniLq7bYr4BaiXowdO _2sAFaB0tx4Hd5KxVkdUcAx _3sUJGnemgtNczijwoT8PGg">
                <span class="pthKOcceozMuXLYrLlbL1">
                  <i class="icon icon-report"></i>
                </span>
                <span class="_2-cXnP74241WI7fpcpfPmg _70940WUuFmpHbhKlj8EjZ">
                  report
                </span>
              </button>
            </div>
            <div class="OccjSdFd6HkHhShRg6DOl"></div>
            <div class="_3MmwvEEt6fv5kQPFCVJizH">
              <div>
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-label="more options"
                  id="t3_vxiwz5-overlay-overflow-menu"
                  class="_2pFdCpgBihIaYh9DSMWBIu _1EbinKu2t3KjaT2gR156Qp _1k3nXWGGz2NdPr8dg49Tbs _2sAFaB0tx4Hd5KxVkdUcAx _3sUJGnemgtNczijwoT8PGg uMPgOFYlCc5uvpa2Lbteu"
                >
                  <i class="_38GxRFSqSC-Z2VLi5Xzkjy icon icon-overflow_horizontal"></i>
                </button>
              </div>
            </div>
            <div class="_21pmAV9gWG6F_UKVe7YIE0"></div>
          </FooterItems>
        </div>
      </PostFooter>
    </PostItemContainer>
  );
}

export default PostsItem;

const PostItemContainer = styled.div`
background-color: #393939;
    color: white;
    margin-top: 10px;
    width: 40%;
    text-align:center;
    border-radius: 5px;
    
`;

const PBodyContainer = styled.div`
//   color: var(--newCommunityTheme-actionIcon);
//   --post-line-color: var(--newCommunityTheme-postLine);
//   --post-icon-color: var(--newCommunityTheme-postIcon);
//   cursor: pointer;
//   padding: 0;
//   border: 0;
//   font: inherit;
//   vertical-align: baseline;
  margin: 0 8px;
//   --posttitletextcolor: #222222;
//   --postTitle-VisitedLinkColor: #9b9b9b;
//   --postTitleLink-VisitedLinkColor: #9b9b9b;
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderImg = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  border-radius: 100%;
  display: inline-block;
  height: 20px;
  margin-right: 4px;
  vertical-align: middle;
  width: 20px;
  // background-color: rgb(0, 121, 211);
`;
const PostMediaContainer = styled.div``;

const PostFooter = styled.div`
display: flex;
flex-direction: row;
`;

const FooterItems = styled.div`
display: flex;
flex-direction: row;
`;
