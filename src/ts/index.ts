import { JOBS } from './jobs'

function main(){
  JOBS.forEach(job => job.execute());
}

main()
