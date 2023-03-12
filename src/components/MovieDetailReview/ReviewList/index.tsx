import { Review, ReviewSortType } from '@/query/types';
import numberWithCommas from '@/utils/numberWithCommas';
import classes from './ReviewList.module.css';
import serveyIcon01 from './assets/ic_survey_01.png';
import serveyIcon02 from './assets/ic_survey_02.png';
import serveyIcon03 from './assets/ic_survey_03.png';
import serveyIcon04 from './assets/ic_survey_04.png';
import serveyIcon05 from './assets/ic_survey_05.png';
import Image from 'next/image';
import { ThreeDots } from 'react-loader-spinner';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/auth';

export interface ReviewListProps {
  list: Review[];
  totalCount: number;
  sortType: ReviewSortType;
  isFetchingNextPage?: boolean;
  onSortTypeChange: (sortType: ReviewSortType) => void;
  onDelete: (reviewId: number) => void;
  onEdit: (reviewId: number) => void;
  onLike: (reviewId: number) => void;
  onMoreShow: ({
    currentCount,
    sortType,
  }: {
    currentCount: number;
    sortType: ReviewSortType;
  }) => void;
}

const ReviewList = ({
  list,
  totalCount,
  sortType,
  isFetchingNextPage = false,
  onMoreShow,
  onSortTypeChange,
  onDelete,
  onEdit,
  onLike,
}: ReviewListProps) => {
  const user = useRecoilValue(userState);

  const getServeyIcon = (score: number) => {
    if (score >= 9) {
      return serveyIcon01;
    } else if (score >= 7) {
      return serveyIcon02;
    } else if (score >= 5) {
      return serveyIcon03;
    } else if (score >= 3) {
      return serveyIcon04;
    } else {
      return serveyIcon05;
    }
  };

  return (
    <div>
      <div className={classes['header']}>
        <span className={classes['total']}>{`총 ${numberWithCommas(totalCount)}건`}</span>
        <div>
          <button
            className={sortType === 'recent' ? classes['active'] : ''}
            onClick={() => onSortTypeChange('recent')}
          >
            최신순
          </button>
          <button
            className={sortType === 'like' ? classes['active'] : ''}
            onClick={() => onSortTypeChange('like')}
          >
            공감순
          </button>
        </div>
      </div>
      <ul className={classes['items']}>
        {list.map((item) => {
          const anonymizedName = item.MemberName.split('').reduce(
            (name, character, index, arr) =>
              index === 0 || index === arr.length - 1 ? name + character : name + '*',
            '',
          );
          const isOwn = item.MemberID === user?.id;
          return (
            <li
              key={item.ReviewID}
              className={isOwn ? `${classes['item']} ${classes['own']}` : classes['item']}
            >
              <Image
                src={getServeyIcon(item.Evaluation)}
                alt="servey"
                width={42}
                height={42}
                unoptimized
              />
              <div className={classes['top-info']}>
                <span className={classes['name']}>{anonymizedName}</span>
                <span className={classes['score']}>
                  <span className={classes['icon-star']}>
                    <i className="fas fa-star"></i>
                  </span>
                  {item.Evaluation}
                </span>
              </div>
              <p className={classes['review-info']}>{item.ReviewText}</p>
              <div className={classes['bottom-info']}>
                <span className={classes['date']}>{item.RegistDate}</span>
                <span className={classes['recommend']} onClick={() => onLike(item.ReviewID)}>
                  <span
                    className={
                      item.MemberRecommandYN === 'Y'
                        ? `${classes['icon-thumbs-up']} ${classes['liked']}`
                        : classes['icon-thumbs-up']
                    }
                  >
                    <i className="far fa-thumbs-up"></i>
                  </span>
                  {item.RecommandCount}
                </span>
              </div>
              {isOwn ? (
                <div className={classes['user-control']}>
                  <button className={classes['edit']} onClick={() => onEdit(item.ReviewID)}>
                    수정
                  </button>
                  <button className={classes['delete']} onClick={() => onDelete(item.ReviewID)}>
                    삭제
                  </button>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      {list.length < totalCount ? (
        <button
          className={classes['btn-more']}
          onClick={() => onMoreShow({ sortType, currentCount: list.length })}
        >
          {isFetchingNextPage ? (
            <ThreeDots
              height="24"
              width="24"
              radius="9"
              color="grey"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ display: 'inline-block', width: 'fit-content' }}
              visible={true}
            />
          ) : (
            <span>
              펼쳐보기 <i className="fas fa-angle-down"></i>
            </span>
          )}
        </button>
      ) : null}
    </div>
  );
};

export default ReviewList;
