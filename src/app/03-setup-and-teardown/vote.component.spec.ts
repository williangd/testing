import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent;
  });
  it('should increment totalVote whe upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrease totalVotes when downvotaded', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
